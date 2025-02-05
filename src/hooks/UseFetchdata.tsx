import { useDispatch } from "react-redux";
import { setAllProject, setBlogs, setProject, setResume, setSkills } from "../store/slices/dataSlices";
import api from "../services/axioswrapper";

export const useFetchData = () => {

    const dispatch = useDispatch();
    const getResume = async () => {
        try {
            const response = await api.get("/api/resume");
            dispatch(setResume(response.data));
        } catch (error) {
            console.error("Error fetching resume:", error.response?.data || error.message);
            return null;
        }
    };

    const getProjects = async () => {
        try {
            const response = await api.get("/api/project");
            dispatch(setProject(response.data));
        } catch (error) {
            console.error("Error fetching projects:", error.response?.data || error.message);
            return null;
        }
    };

    const getSkills = async () => {
        try {
            const response = await api.get("/api/skills");
            dispatch(setSkills(response.data))
        } catch (error) {
            console.error("Error fetching skills:", error.response?.data || error.message);
            return null;
        }
    };

    const getBlogs = async () => {
        try {
            const response = await api.get("/api/blog");
            dispatch(setBlogs(response.data))
        } catch (error) {
            console.error("Error fetching blogs:", error.response?.data || error.message);
            return null;
        }
    };

    const getAllProject = async () => {
        try {
            const response = await api.get("/api/project?start=0&limit=20");
            dispatch(setAllProject(response.data))
        } catch (error) {
            console.error("Error fetching all projects:", error.response?.data || error.message);
            return null;
        }
    }

    return { getResume, getProjects, getSkills, getBlogs, getAllProject };
};

export default useFetchData