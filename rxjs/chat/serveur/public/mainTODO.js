const FADE_TIME = 150;
const TYPING_TIMER_LENGTH = 400;
const COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];

const $window = $(window);
const $usernameInput = $('.usernameInput'); // Input for username
const $messages = $('.messages'); // Messages area
const $inputMessage = $('.inputMessage'); // Input message input box
const $loginPage = $('.login.page'); // The login page
const $chatPage = $('.chat.page'); // The chatroom page
$usernameInput.focus();

const socket = io('ws://172.17.6.128:1080');

//Subscribe to socket event

// const dataStreamSocket = ???
// const loginStreamSocket = ???
// const userJoinStreamSocket = ???
// const userLeftStreamSocket = ???


//Handle message when typings text

// const inputMessageStream = ???


//Handle name when typings username

// const usernameInputStream = ???


// A clue

// const usernameStream = ???
// const messageStream = ???
// const connectedStream = ???




//Handle event on window object (enter key)

// const windowStream = ???

//Handle event on login

// const loginStream = ???

//Handle for chat

// const chatStream = ???






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

