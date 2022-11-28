import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUser } from '../../actions/updateActions';
import { uploadImage } from '../../actions/uploadAction';

function ProfileModal({modalOpened,setModalOpened,data}) {
  const theme = useMantineTheme();
  const {password, ...other} = data;

  const [formData,setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const {user} = useSelector((state)=>state.authReducers.authData);

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})

  }
  const onImageChange = (e) =>{
    if (e.target.files && e.target.files[0]){
        let img = e.target.files[0];
        e.target.name === "profileImage"
            ? setProfileImage(img)
            : setCoverImage(img)
    }
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    let UserData = formData;
    if(profileImage){
        const data = new FormData();
        const filename = Date.now() + profileImage.name;
        data.append("name", filename);
        data.append("file", profileImage);
        UserData.profilePicture = filename;
        try {
            dispatch(uploadImage(data))
        } catch (error) {
            console.log(error)
        }
    }
    if(coverImage){
        const data = new FormData();
        const filename = Date.now() + coverImage.name;
        data.append("name", filename);
        data.append("file", coverImage);
        UserData.coverPicture = filename;
        try {
            dispatch(uploadImage(data))
        } catch (error) {
            console.log(error)
        }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);

  }

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >
        <form className='info-form'>
            <h3>Your info</h3>

            <div>
                <input type="text" className="info-input" name="firstname" placeholder='First Name' onChange={handleChange} value={formData.firstname} />
                <input type="text" className="info-input" name="lastname" placeholder='Last Name' onChange={handleChange} value={formData.lastname}/>
            </div>
            <div>
                <input type="text" className="info-input" name="worksAt" placeholder='Works at' onChange={handleChange} value={formData.worksAt}/>
            </div>
            <div>
                <input type="text" className="info-input" name="livesin" placeholder='Lives In' onChange={handleChange} value={formData.livesin}/>
                <input type="text" className="info-input" name="country" placeholder='Country'onChange={handleChange} value={formData.country}/>
            </div>
            <div>
                <input type="text" className="info-input" name="status" placeholder='Relationship Status'onChange={handleChange} value={formData.status}/>
            </div>
            <div>
                Profile Image
                <input type="file" name="profileImage" id="" onChange={onImageChange} />
                Cover Image
                <input type="file" name="coverImage" id="" onChange={onImageChange}/>
            </div>
            <button className="button info-button" onClick={handleSubmit}>
                Update
            </button>
        </form>
    </Modal>
  );
}

export default ProfileModal