# [Card Parallax](https://blog.olivierlarose.com/tutorials/cards-parallax)

the card is sticky, they normally just stack on top of each other.
To get the stacking effect, we have a dynamic top style set using the index of the card
Then to have the parallax effect we use the scrollYProgress of the main parent
We pass a range to each card to set the scale of the card only when it reaches the sticky position
The range is an array of two values [0, 1]. 1 is when the card is at the sticky position
To get the 0 value, we use the index of the card. Since we know the index is between 0 and 4, we divide 
4 by 100 and we get 25. so in order to get between 0 and 1, we use 0.25 * index that will give us the appropriate value
finally we need to pass the card a target scale, because not all the cards have the same scale.
The first one scales more than the second one, etc. So we pass the target scale to the card
the formula is 1 - ((project.length - index) * 0.05)
the 1 is the max scale
the project.length - the index will always pull higher values at the top, then we multiply by 0.05 to get the scale
Finally we pass the scrollYProgress to know the progress of the scroll

Finally add the smooth scroll using the lenis scroll