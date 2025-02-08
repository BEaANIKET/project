import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    resume: [],
    projects: [],
    skills: [],
    blogs: [],
    allProject: [],
    selecteProject: [],
}

const dataSlices = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        setResume: (state, action) => {
            state.resume = action.payload
        },
        setProject: (state, action) => {
            state.projects = action.payload
        },
        setSkills: (state, action) => {
            state.skills = action.payload
        },
        setBlogs: (state, action) => {
            state.blogs = action.payload
        },
        setAllProject: (state, action) => {
            state.allProject = action.payload
        },
        setSelectedProject: (state, action) => {
            state.selecteProject = action.payload
        },
    }
})

export const { setResume, setProject, setSkills, setBlogs, setAllProject, setSelectedProject } = dataSlices.actions
export default dataSlices.reducer