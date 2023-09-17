import * as Yup from 'yup';
import dictionary from '../../config/dictionary';

const validationClientsPhotos = Yup.object().shape({
  photoDate: Yup.string().required(dictionary.login.validation.required),
  linkImageToService: Yup.string().required(dictionary.login.validation.required),
  linkPhotoWithLastSchedule: Yup.string().required(dictionary.login.validation.required),
});

export default validationClientsPhotos;
