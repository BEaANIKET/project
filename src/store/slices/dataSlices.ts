import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    resume: [],
    projects: [],
    skills: [],
    blogs: [],
    allProject: []
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
        }
    }
})

export const { setResume, setProject, setSkills, setBlogs, setAllProject } = dataSlices.actions
export default dataSlices.reducer