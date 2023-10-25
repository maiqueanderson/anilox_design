import React from 'react';
import GooglePicker from 'react-google-picker';

const GoogleDrivePicker = () => {

    const CLIENT_ID = '820417788086-ee6r5992lbtbbah574tm0a1n6kf21vtb.apps.googleusercontent.com';
const DEVELOPER_KEY = 'AIzaSyA989cCr5xw44HD91WrfYq9b_oY6Q9M7tA';
const SCOPE = ['https://www.googleapis.com/auth/drive.readonly'];

  return (
    <div className="container">
    <GooglePicker clientId={CLIENT_ID}
                  developerKey={DEVELOPER_KEY}
                  scope={SCOPE}
                  onChange={data => console.log('on change:', data)}
                  onAuthFailed={data => console.log('on auth failed:', data)}
                  multiselect={true}
                  navHidden={true}
                  authImmediate={false}
                  mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                  viewId={'DOCS'}>
      <span>Click me!</span>
      <div className="google"></div>
    </GooglePicker>
      <br/>
      <hr/>
      <br/>
      <GooglePicker clientId={CLIENT_ID}
                    developerKey={DEVELOPER_KEY}
                    scope={SCOPE}
                    onChange={data => console.log('on change:', data)}
                    onAuthFailed={data => console.log('on auth failed:', data)}
                    multiselect={true}
                    navHidden={true}
                    authImmediate={false}
                    viewId={'FOLDERS'}
                    createPicker={ (google, oauthToken) => {
                        const googleViewId = google.picker.ViewId.FOLDERS;
                        const docsView = new google.picker.DocsView(googleViewId)
                            .setIncludeFolders(true)
                            .setMimeTypes('application/vnd.google-apps.folder')
                            .setSelectFolderEnabled(true);

                        const picker = new window.google.picker.PickerBuilder()
                            .addView(docsView)
                            .setOAuthToken(oauthToken)
                            .setDeveloperKey(DEVELOPER_KEY)
                            .setCallback(()=>{
                              console.log('Custom picker is ready!');
                            });

                        picker.build().setVisible(true);
                    }}
      >
          <span>Click to build a picker which shows folders and you can select folders</span>
          <div className="google"></div>
      </GooglePicker>

  </div>
   

  );
}

export default GoogleDrivePicker;
