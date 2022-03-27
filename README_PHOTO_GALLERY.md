Photo Gallery Project


Description:

For this project a gallery page was created to share pictures that are important to me.  Visitors can click on the image to view a description and like the image if they choose to.


Tasks completed to create the working gallery:
- Added photos to gallery.data.js
-Retrieve data from '/gallery'  and store it in an App.jsx, completed using axios and GET.
-Created a component called GalleryList and passed gallery data stored in the App.jsx via props. This component looped over the list of gallery data.
-Created a component called GalleryItem, passed it individual gallery item via props.
- GalleryList updated to use GalleryItem to display image, like button, and description.
- GalleryItem display a like button that uses axios and PUT to update the like count.
-Using conditional rendering the GalleryItem will swap image and description upon click.