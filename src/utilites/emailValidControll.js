const emailValidControll = (data) => {
    if (data) {
      if (data) {
        const emailArray = data.split("");
        const dtcControll = emailArray.slice(emailArray.indexOf("@"));

        return emailArray.indexOf("@") > 0 &&
          dtcControll.indexOf(".") < dtcControll.length - 1 &&
          dtcControll.indexOf(".") > 0 &&
          dtcControll.indexOf(".") - dtcControll.indexOf("@") > 1
          ? true
          : false;
      }
    } else {
      return false;
    }
  };

  export default emailValidControll