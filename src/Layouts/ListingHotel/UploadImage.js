import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import { toast } from 'react-toastify'
import Navbars from '../../Components/Navbar/navbar'
import Footer from '../Footer/footer.js'
import DarkOverlaybackGround from '../../Components/DarkOverlaybackGround/DarkOverlaybackGround'
import UploadService from '../../Services/Api/Utilities/FileUploader/UploadFilesService'
class UploadImage extends Component {
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
      hotelId: window.location.href,
      uploaded: false,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    toast.configure()
    this.setState({
      hotelId: this.state.hotelId.split('=')[1],
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

    this.setState({
      progress: 0,
      currentFile: currentFile,
      loading: true,
    })

    UploadService.upload(
      currentFile,
      (event) => {
        this.setState({
          progress: Math.round((100 * event.loaded) / event.total),
        })
      },
      this.state.hotelId
    )
      .then((response) => {
        console.log(response)
        this.setState({
          message: response.data.message,
          progress: 100,
          loading: false,
          uploaded: true,
        })

        this.notifySuccess('successfully uploaded')
      })

      .catch(() => {
        this.setState({
          progress: 0,
          message: 'Could not upload the file!',
          currentFile: undefined,
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
      uploaded,
    } = this.state

    return (
      <div>
        <Navbars />
        <div className='upload-container'>
          <div class='container step-indicator '>
            <ul class='list-unstyled multi-steps'>
              <li>Basic Information</li>
              <li class='is-active'>Upload hotel Image</li>
              <li>Upload souvenir Images</li>
              <li>Add value added servces</li>
              <li>Facilities</li>{' '}
            </ul>
          </div>
          <div className='container mt-5'>
            <small id='emailHelp' class='form-text text-muted'>
              This image is visible on search result !
            </small>
            {currentFile && this.state.loading && (
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
            <div className='next-container'>
              <button
                className='previous-button btn btn-primary'
                // onClick={() => {
                //   navigate(-1)
                // }}
              >
                {'<'} Previous!
              </button>
              {this.state.uploaded ? (
                <Link to={`/seller/hotel/souvenir?id=${this.state.hotelId}`}>
                  <button type='submit' className='next-button btn btn-primary'>
                    Next! {'>'}
                  </button>
                </Link>
              ) : (
                <button className='next-button btn btn-primary' disabled>
                  Next! {'>'}
                </button>
              )}
            </div>
          </div>
        </div>

        <DarkOverlaybackGround
          loading={loading}
          content={'Uplading your image'}
        />
        <Footer />
      </div>
    )
  }
}

export default UploadImage
