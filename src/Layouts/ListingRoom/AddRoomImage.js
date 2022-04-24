import React, { Component } from 'react'
import { useParams, useSearchParams, useLocation } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import { toast } from 'react-toastify'
import UploadedSouvenirImages from '../ListingHotel/UploadedSouvenirImages'
import DarkOverlaybackGround from '../../Components/DarkOverlaybackGround/DarkOverlaybackGround'
import UploadService from '../../Services/Api/Utilities/FileUploader/UploadFilesService'

class AddRoomImage extends Component {
  constructor(props) {
    super(props)
    this.upload = this.upload.bind(this)
    this.onDrop = this.onDrop.bind(this)

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: '',
      fileInfos: [],
      hotelId: 1,
      uploadedImages: [],
    }
  }

  componentDidMount() {
    toast.configure()
    window.scrollTo(0, 0)
    this.setState({
      hotelId: 1,
    })
  }
  notifySuccess = (message) => {
    toast.success(message)
  }
  notifyError = (message) => {
    toast.error(message)
  }
  upload() {
    let currentFile = this.state.selectedFiles[0]
    let title = document.getElementsByName('title')[0].value
    let subTitle = document.getElementsByName('sub_title')[0].value
    let description = document.getElementsByName('description')[0].value

    this.setState({
      progress: 0,
      currentFile: currentFile,
      loading: true,
    })

    UploadService.uploadSouvenir(
      currentFile,
      (event) => {
        this.setState({
          progress: Math.round((100 * event.loaded) / event.total),
        })
      },
      title,
      subTitle,
      description,
      this.state.hotelId
    )
      .then((response) => {
        this.setState({
          message: response.data.message,
          progress: 0,
          loading: false,
        })
        this.notifySuccess('successfully uploaded')
      })

      .catch(() => {
        this.setState({
          progress: 0,
          message: 'Could not upload the file!',
          currentFile: undefined,
          loading: false,
        })
        this.notifyError('Could not upload the file!')
      })

    this.setState({
      selectedFiles: undefined,
    })
  }

  onDrop(files) {
    if (files.length > 0) {
      this.setState({ selectedFiles: files })
    }
  }

  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
      loading,
      hotelId,
      uploadedImages,
    } = this.state

    return (
      <div>
        <div className='upload-container'>
          <div className='container mt-5'>
            <small id='emailHelp' class='form-text text-muted'>
              You can upload multiple images. these images are display on your
              hotel page !
            </small>
            {currentFile && (
              <div className='progress mb-3'>
                <div
                  className='progress-bar progress-bar-info progress-bar-striped'
                  role='progressbar'
                  aria-valuenow={progress}
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: progress + '%' }}
                >
                  {progress}%
                </div>
              </div>
            )}

            <Dropzone onDrop={this.onDrop} multiple={false}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    {selectedFiles && selectedFiles[0].name ? (
                      <div className='selected-file'>
                        {selectedFiles && selectedFiles[0].name}
                      </div>
                    ) : (
                      'Drag and drop file here, or click to select file'
                    )}
                  </div>
                  <aside className='selected-file-wrapper'>
                    <button
                      className='btn btn-success'
                      disabled={!selectedFiles}
                      onClick={this.upload}
                    >
                      Upload
                    </button>
                  </aside>
                </section>
              )}
            </Dropzone>
            <UploadedSouvenirImages trigger={loading} />
          </div>
        </div>

        <DarkOverlaybackGround
          loading={loading}
          content={'Uplading your image'}
        />
      </div>
    )
  }
}

export default AddRoomImage
