import firebase from "firebase";


const saveTemplate = (templateId, userInfo, addTechArr, userInfoPortfolio, userAboutHardSkills,userWorkHistory, customizedTemplateUid,allCustomizedTemplateActions, disp, handleUploadAvatar) => {
    
    
    

    const save = (callback = console.log) => {
      if (customizedTemplateUid) {
        let newTemplate = firebase
          .database()
          .ref(`templates/${customizedTemplateUid}/`);
        newTemplate.update({
          info: {
            firstName: userInfo.firstName,
            secondName: userInfo.secondName,
            careerObjective: userInfo.careerObjective,
            aboutMeInfo: userInfo.aboutMeInfo,
            email: userInfo.email,
            vkontakte: userInfo.vkontakte,
            skype: userInfo.skype,
            phoneNumber: userInfo.phoneNumber,
            github: userInfo.github,
            facebook: userInfo.facebook,
            education: userInfo.education,
            avatar: userInfo.avatar,
            languages: userInfo.languages,
            id: templateId
          },
          portfolio: userInfoPortfolio,
          userWorkHistory,
          userAboutHardSkills,
          newTech: addTechArr.techList,
          fileAvatar: userInfo?.fileAvatar || null,
        });
        callback();
      } else {
        let newTemplate = firebase.database().ref("templates/");
        newTemplate
          .push({
            fileAvatar: userInfo?.fileAvatar || null,
            info: {
              firstName: userInfo.firstName,
              secondName: userInfo.secondName,
              careerObjective: userInfo.careerObjective,
              aboutMeInfo: userInfo.aboutMeInfo,
              email: userInfo.email,
              vkontakte: userInfo.vkontakte,
              skype: userInfo.skype,
              phoneNumber: userInfo.phoneNumber,
              github: userInfo.github,
              facebook: userInfo.facebook,
              education: userInfo.education,
              avatar: userInfo.avatar,
              languages: userInfo.languages,
              id: templateId,
            },
            newTech: addTechArr.techList,
            portfolio: userInfoPortfolio,
            userWorkHistory,
            userAboutHardSkills,
          })
          .then((snap) => {
            disp(allCustomizedTemplateActions ,snap.key)
            callback(snap.key);
          });
      }
    };
    save((uid) => {
      // if (fileHeader?.name) {
      //   setLoadHeader(true);
      //   handleUploadHeader((urlHeader) => {
      //     let newTemplate = firebase
      //       .database()
      //       .ref(`templates/${uid || customizedTemplateUid}/`);
      //     newTemplate
      //     .then(setLoadHeader(false));
      //   });
      // }

      // if (fileBody?.name) {
      //   setLoadBody(true);
      //   handleUploadBody((urlBody) => {
      //     let newTemplate = firebase
      //       .database()
      //       .ref(`templates/${uid || customizedTemplateUid}/`);
      //     newTemplate
      //       .update({
      //         bodyBG: urlBody,
      //       })
      //       .then(setLoadBody(false));
      //   });
      // }

      if (userInfo?.fileAvatar?.name) {
        
        handleUploadAvatar((urlAvatar) => {
          let newTemplate = firebase
            .database()
            .ref(`templates/${uid || customizedTemplateUid}/`);
          newTemplate
            .update({
              fileAvatar: urlAvatar,
            })
            .then();
        });
      }

    //   if (!loadHeader && !loadBody && !loadAvatar) {
    //     setTimeout(() => {
    //       setLoadSave(false);
    //     }, 1000);
    //   }
    });
  }

  export default saveTemplate;