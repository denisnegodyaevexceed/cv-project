const showProject = (firstItem, secondItem) => {
        const show = !(
            firstItem.name &&
            firstItem.link &&
            firstItem.summary &&
            firstItem.whatYouDo &&
            firstItem?.stack?.length > 0
          ) &&
          !(
            secondItem.name ||
            secondItem.link ||
            secondItem.summary ||
            secondItem.whatYouDo ||
            secondItem?.stack?.length > 0
          )
        return show
}

export default showProject