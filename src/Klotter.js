let selectedFile;
    const storageService = firebase.storage();
    const storageRef = storageService.ref();

    function handleFileUploadChange(e) {
      selectedFile = e.target.files[0];
      console.log(e.target.files[0]);
    }

    function handleFileUploadSubmit() {
      const uploadTask = storageRef
        .child(`images/${selectedFile.name}`)
        .put(selectedFile); //create a child directory called images, and place the file inside this directory
      uploadTask.on(
        'state_changed',
        snapshot => {
          // Observe state change events such as progress, pause, and resume
        },
        error => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        () => {
          // Do something once upload is complete
          console.log('success');
        },
      );
    }

    function showImage() {}



     {/* <div id="filesubmit">
              <input
                onChange={handleFileUploadChange}
                type="file"
                class="file-select"
                accept="image/*"
              />
              <button onClick={handleFileUploadSubmit} class="file-submit">
                SUBMIT
              </button>
              <button onClick={showImage}>Show</button>
            </div> */}