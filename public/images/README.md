# Images Directory

This directory contains all local images for the Conference Event Planner application.

## Directory Structure

- `venues/` - Venue room images
- `addons/` - Add-ons equipment images

## Venue Images

Place the following images in the `venues/` folder:

1. **conference-room.jpg**
   - Source: https://pixabay.com/photos/chairs-empty-office-room-table-2181916/
   - Used for: Conference Room (Capacity:15)

2. **auditorium.jpg**
   - Source: https://pixabay.com/photos/event-venue-auditorium-meeting-1597531/
   - Used for: Auditorium Hall (Capacity:200)

3. **presentation-room.jpg**
   - Source: https://pixabay.com/photos/convention-center-chair-seminar-3908238/
   - Used for: Presentation Room (Capacity:50)

4. **meeting-room.jpg**
   - Source: https://pixabay.com/photos/chairs-empty-office-room-table-2181916/
   - Used for: Large Meeting Room (Capacity:10)
   - Note: Same image as conference-room.jpg

5. **small-meeting-room.jpg**
   - Source: https://pixabay.com/photos/laptops-meeting-businessmen-593296/
   - Used for: Small Meeting Room (Capacity:5)

## Add-ons Images

Place the following images in the `addons/` folder (for future implementation):

1. **projector.jpg**
   - Source: https://pixabay.com/photos/business-computer-conference-20031/
   - Used for: Projector add-on

2. **speakers.jpg**
   - Source: https://pixabay.com/photos/speakers-bluetooth-tech-speaker-4109274/
   - Used for: Speakers add-on

3. **microphone.jpg**
   - Source: https://pixabay.com/photos/public-speaking-mic-microphone-3926344/
   - Used for: Microphone add-on

4. **whiteboard.jpg**
   - Source: https://pixabay.com/photos/whiteboard-dry-erase-marker-blank-2903269/
   - Used for: Whiteboard add-on

5. **signs.jpg**
   - Source: https://pixabay.com/photos/signpost-waypoint-wood-grain-board-235079/
   - Used for: Signs add-on

## Usage in Code

- Venue images are referenced in `src/venueSlice.js`
- Add-ons images will be referenced in `src/avSlice.js` when implemented
- All images use paths starting with `/images/` (relative to the public folder)
