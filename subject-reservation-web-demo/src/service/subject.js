import axios from "axios";
const fetchSubjectList = async function () {
    let subjectList = await axios.get(`${process.env.API_URL}/subjects`);
    return subjectList.data;
}

export { fetchSubjectList }