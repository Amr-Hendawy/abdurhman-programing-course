calculaeCircleArea <- function(radius) {
    area <- radius * radius  * pi

    return(area)
}

cat("Enter the radius: ")
radius <- 10
area <- calculaeCircleArea(radius)

cat("Circle Area= ", area, "\n")