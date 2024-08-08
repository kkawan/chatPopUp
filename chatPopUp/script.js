document.addEventListener('DOMContentLoaded', function () {
    const openChatBtn = document.getElementById('openChatBtn');
    const chatPopup = document.getElementById('chatPopup');
    const closeChatBtn = document.getElementById('closeChatBtn');

    openChatBtn.addEventListener('mouseover', function () {
        chatPopup.style.display = 'block';
    });

    closeChatBtn.addEventListener('click', function () {
        chatPopup.style.display = 'none';
    });

    window.addEventListener('mouseover', function (event) {
        if (event.target == chatPopup) {
            chatPopup.style.display = 'none';
        }
    });
});
