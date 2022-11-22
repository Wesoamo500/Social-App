import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

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
                <input type="text" className="info-input" name="firstName" placeholder='First Name' />
                <input type="text" className="info-input" name="lastName" placeholder='Last Name'/>
            </div>
            <div>
                <input type="text" className="info-input" name="worksAt" placeholder='Works at'/>
            </div>
            <div>
                <input type="text" className="info-input" name="livesIn" placeholder='Lives In' />
                <input type="text" className="info-input" name="Country" placeholder='Country'/>
            </div>
            <div>
                <input type="text" className="info-input" name="status" placeholder='Relationship Status'/>
            </div>
            <div>
                Profile Image
                <input type="file" name="profileImg" id="" />
                Cover Image
                <input type="file" name="coverImg" id="" />
            </div>
            <button className="button info-button">
                Update
            </button>
        </form>
    </Modal>
  );
}

export default ProfileModal