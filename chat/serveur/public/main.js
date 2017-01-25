const FADE_TIME = 150;
const TYPING_TIMER_LENGTH = 400;
const COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];

const socket = io();

const $window = $(window);
const $usernameInput = $('.usernameInput'); // Input for username
const $messages = $('.messages'); // Messages area
const $inputMessage = $('.inputMessage'); // Input message input box
const $loginPage = $('.login.page'); // The login page
const $chatPage = $('.chat.page'); // The chatroom page
$usernameInput.focus();


const inputMessageStream = Rx.Observable
    .fromEvent($inputMessage, 'keyup')
    .map(e => e.target.value);



const usernameInputStream = Rx.Observable
    .fromEvent($usernameInput, 'keyup')
    .map(e => e.target.value)
    .filter(name => name.length > 2);


const usernameStream = new Rx.BehaviorSubject(null);
const messageStream = new Rx.Subject();
const connectedStream = new Rx.BehaviorSubject(false);


usernameStream.subscribe(name => {
    if (name) {
        $loginPage.fadeOut();
        $chatPage.show();
        $loginPage.off('click');
        $currentInput = $inputMessage.focus();
        socket.emit('add user', name);
    }
});

messageStream.subscribe(([username, message]) => {
    message = cleanInput(message);
    $inputMessage.val('');
    addChatMessage({
        username: username,
        message: message
    });
    socket.emit('new message', message);
});


const combined = Rx.Observable
    .combineLatest(
        usernameInputStream,
        usernameStream.asObservable()
    );

const combinedChat = Rx.Observable
    .combineLatest(
        usernameStream.asObservable(),
        inputMessageStream,
        connectedStream
    )

const windowStream = Rx.Observable
    .fromEvent($window, 'keydown')
    .map(e => e.which)
    .filter(event => event === 13);


const loginStream = windowStream
    .withLatestFrom(combined)
    .filter(([code, [current, name]]) => name === null)
    .subscribe(([code, [current, name]]) => usernameStream.next(current));


const chatStream = windowStream
    .withLatestFrom(combinedChat)
    .filter(([code, [name, m, connected]]) => name !== null && connected && m.length > 0)
    .subscribe(([code, [name, message]]) => messageStream.next([name, message]));



  socket.on('login', (data) => {
    connectedStream.next(true);
    const message = "Welcome to Reactive Chat – ";
    log(message, {
      prepend: true
    });
    addParticipantsMessage(data);
  });


  socket.on('new message', (data) => {
    addChatMessage(data);
  });


  socket.on('user joined', (data) => {
    log(data.username + ' joined');
    addParticipantsMessage(data);
  });


  socket.on('user left', (data) => {
    log(data.username + ' left');
    addParticipantsMessage(data);
    removeChatTyping(data);
  });





///////////////////////////////////////////////////////////////


function cleanInput (input) {
    return $('<div/>').text(input).text();
}

function log (message, options) {
    const $el = $('<li>').addClass('log').text(message);
    addMessageElement($el, options);
}

function getTypingMessages (data) {
    return $('.typing.message').filter((i) => {
        return $(this).data('username') === data.username;
    });
}

function getUsernameColor (username) {
    // Compute hash code
    let hash = 7;
    for (let i = 0; i < username.length; ++i) {
        hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
    const index = Math.abs(hash % COLORS.length);
    return COLORS[index];
}

function addChatMessage (data, options) {
// Don't fade the message in if there is an 'X was typing'
    const $typingMessages = getTypingMessages(data);
    options = options || {};
    if ($typingMessages.length !== 0) {
        options.fade = false;
        $typingMessages.remove();
    }

    const $usernameDiv = $('<span class="username"/>')
        .text(data.username)
        .css('color', getUsernameColor(data.username));
    const $messageBodyDiv = $('<span class="messageBody">')
        .text(data.message);

    const typingClass = data.typing ? 'typing' : '';
    const $messageDiv = $('<li class="message"/>')
        .data('username', data.username)
        .addClass(typingClass)
        .append($usernameDiv, $messageBodyDiv);

    addMessageElement($messageDiv, options);
}

function addMessageElement (el, options) {
    const $el = $(el);

    // Setup default options
    if (!options) {
        options = {};
    }
    if (typeof options.fade === 'undefined') {
        options.fade = true;
    }
    if (typeof options.prepend === 'undefined') {
        options.prepend = false;
    }

    // Apply options
    if (options.fade) {
        $el.hide().fadeIn(FADE_TIME);
    }
    if (options.prepend) {
        $messages.prepend($el);
    } else {
        $messages.append($el);
    }
    $messages[0].scrollTop = $messages[0].scrollHeight;
}


function addParticipantsMessage (data) {
    let message = '';
    if (data.numUsers === 1) {
        message += `there's 1 participant`;
    } else {
        message += `there are ${data.numUsers} participants`;
    }
    log(message);
}

  function removeChatTyping (data) {
    getTypingMessages(data).fadeOut(() => {
      $(this).remove();
    });
  }


