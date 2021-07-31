export const handleVideo = (req, res)=> res.render("video")

export const editVideo = (req, res)=> {
    return res.send("edit your video");
}

export const uploadVideo = (req, res)=> {
    return res.send("upload your video");
}

export const deleteVideo = (req, res)=> {
    return res.send("delete your video");
}
