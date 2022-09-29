var video = document.querySelector('video')

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream
        video.play()
    })
    .catch(error => {
        console.error(error)
    })

document.querySelector('button').addEventListener('click', () => {
    var canvas = document.querySelector('canvas')
    canvas.height = video.videoHeight
    canvas.width = video.videoWidth
    var context = canvas.getContext('2d')
    context.drawImage(video, 0, 0)
    const link = document.querySelector('.baixar')
    link.download = 'foto.png'
    link.href = canvas.toDataURL()
    link.innerHTML = 'Baixar imagem'
    link.classList.add('sucess')
})