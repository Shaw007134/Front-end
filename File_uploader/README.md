#### File uploader

##### Motivation

1. currently the input file API is powerful, but the default style is too bad, so I have referred some good designs and make a new interface uploader
2. Add the progress bar and abort function, to enhance the user experience
3. Dive into the multi-process management, tried different things, such as add image watermarking to pictures, compress images with canvas, manipulate the audio file etc

##### Intro

1. First component is the drag and drop uploader.

   The dropzone.js will create the dropzone -- the View, and the  filehandler.js will read the file passed from the input, in this file you can do some pre-work, extract file information etc. 

   The final file is the uploadFile.js, will handle the ajax request, and set progress

2. Second component is the uploader with thumbnail

   The drag_thumbnails.js will create the thumbnails_upload zone, and the preview.js will create the preview pages



