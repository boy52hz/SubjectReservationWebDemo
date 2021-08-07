import axios from "axios";
const fetchSubjectList = async function () {
    let subjectList = await axios.get(`/subjects`);
    return subjectList.data;
}

export { fetchSubjectList }