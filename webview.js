import path from 'path';

module.exports = (Franz) => {
  //const getMessages = function getMessages() {

    // set Franz badge
    //Franz.setBadge(5);
  //};

  // check for new messages every second and update Franz badge
  //Franz.loop(getMessages);

  //Franz.setBadge(5);

  // Hide download message
  Franz.injectCSS(path.join(__dirname, 'service.css'));
};
