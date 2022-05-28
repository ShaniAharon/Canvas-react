
export const utilService = {
    drawCharts
}

function drawCharts(ctx, canvas) {
    var gStars = [
        {
            name: 'Michael',
            rate: 100,
        },
        {
            name: 'Static',
            rate: 130
        },
        {
            name: 'Jon',
            rate: 140
        }
    ]
    const barWidth = 40
    ctx.fillStyle = '#03a9f4'//'#e91e63'//'salmon'
    ctx.fillRect(0, 0, canvas.width, canvas.height) // color all the background
    ctx.fillStyle = '#3f51b5' // bars color
    // TODO: start from drawing a bar for single star
    gStars.forEach((star, idx) => {
        star.x = idx * (barWidth + 40) + 20
        const starHeight = star.rate
        star.y = canvas.height - starHeight
        ctx.fillRect(star.x, star.y, barWidth, starHeight)
    })
    console.log(gStars);

}

