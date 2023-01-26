import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { editRow } from '../../api/user.services';

EditModal.propTypes = {
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  modalId: PropTypes.string,
};

function EditModal({ isModalOpen, setIsModalOpen, modalId }) {
  const [data, setData] = useState({
    title: '',
    body: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const res = await editRow(modalId, data);
      toast('Item has updated');
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
      alert('something is wrong');
    }
  };

  return (
    <div>
      <Dialog open={isModalOpen} onClose={handleClose}>
        <DialogTitle
          sx={{
            backgroundColor: 'primary.main',
            py: 1,
            color: 'white',
          }}
        >
          Edit
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            sx={{ my: 3 }}
            value={data.title}
            name="title"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            id="body"
            label="body"
            type="text"
            fullWidth
            variant="standard"
            value={data.body}
            onChange={handleChange}
            name="body"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditModal;
