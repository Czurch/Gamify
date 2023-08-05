import { Quest } from "../../constants/interfaces";

const demoQuests: Array<Quest> = [
  {
    title: "Mount Rainier",
    description:
      "Climb to the summit of Mount Rainier and experience breathtaking views of the surrounding Cascade Range. Fun Fact: Mount Rainier is an active stratovolcano and the most glaciated peak in the contiguous United States.",
    coordinate: { latitude: 46.8523, longitude: -121.7603 },
    reward: 250,
  },
  {
    title: "Mount Whitney",
    description:
      "Embark on an adventure to reach the summit of Mount Whitney, the highest peak in the contiguous United States. Fun Fact: Mount Whitney is located in the Sierra Nevada mountain range and offers stunning vistas of the surrounding alpine lakes and granite peaks.",
    coordinate: { latitude: 36.5785, longitude: -118.2923 },
    reward: 300,
  },
  {
    title: "Denali",
    description:
      "Challenge yourself to conquer Denali, the highest peak in North America. Fun Fact: Denali, also known as Mount McKinley, is located in Alaska's Denali National Park and Preserve, and its summit reaches an elevation of 20,310 feet (6,190 meters).",
    coordinate: { latitude: 63.0692, longitude: -151.007 },
    reward: 500,
  },
  {
    title: "Mount Elbert",
    description:
      "Scale the heights of Mount Elbert, the highest summit of the Rocky Mountains and the second-highest peak in the contiguous United States. Fun Fact: Located in Colorado, Mount Elbert stands at an impressive elevation of 14,440 feet (4,401 meters).",
    coordinate: { latitude: 39.1178, longitude: -106.4454 },
    reward: 200,
  },
  {
    title: "Mount Massive",
    description:
      "Trek to the summit of Mount Massive, the second-highest peak in the Rocky Mountains and the third-highest in the contiguous United States. Fun Fact: Situated in Colorado, Mount Massive offers panoramic views of the surrounding Sawatch Range and alpine wilderness.",
    coordinate: { latitude: 39.1875, longitude: -106.4756 },
    reward: 220,
  },
  {
    title: "Mount Harvard",
    description:
      "Conquer the heights of Mount Harvard, the third-highest summit in the Rocky Mountains and the fourth-highest peak in the contiguous United States. Fun Fact: Located in Colorado, Mount Harvard is part of the Collegiate Peaks and provides stunning vistas of the surrounding valleys.",
    coordinate: { latitude: 38.9245, longitude: -106.3209 },
    reward: 210,
  },
  {
    title: "Mount Rainier",
    description:
      "Climb to the summit of Mount Rainier and experience breathtaking views of the surrounding Cascade Range. Fun Fact: Mount Rainier is an active stratovolcano and the most glaciated peak in the contiguous United States.",
    coordinate: { latitude: 46.8523, longitude: -121.7603 },
    reward: 250,
  },
  {
    title: "Mount Williamson",
    description:
      "Embark on a challenging journey to conquer Mount Williamson, the second-highest peak in the Sierra Nevada range and the fifth-highest in the contiguous United States. Fun Fact: Located in California, Mount Williamson is known for its rugged terrain and impressive vertical relief.",
    coordinate: { latitude: 37.6178, longitude: -118.3275 },
    reward: 280,
  },
  {
    title: "Blanca Peak",
    description:
      "Scale the heights of Blanca Peak, one of the famous Fourteeners in Colorado, offering stunning panoramic views of the Sangre de Cristo Range. Fun Fact: Blanca Peak is the fourth-highest summit in Colorado and is known for its challenging but rewarding ascent.",
    coordinate: { latitude: 37.5775, longitude: -105.4856 },
    reward: 190,
  },
  {
    title: "Mount Lincoln",
    description:
      "Ascend Mount Lincoln, one of the prominent Fourteeners in Colorado's Mosquito Range, and enjoy breathtaking vistas of the surrounding peaks and valleys. Fun Fact: Mount Lincoln is named after Abraham Lincoln and is known for its rugged terrain and rewarding hiking opportunities.",
    coordinate: { latitude: 39.3514, longitude: -106.1119 },
    reward: 200,
  },
  {
    title: "Mount Cameron",
    description:
      "Embark on an exhilarating adventure to summit Mount Cameron, one of the Fourteeners in Colorado, offering panoramic views of the surrounding mountains and valleys. Fun Fact: Mount Cameron is often climbed in combination with other nearby peaks due to its proximity.",
    coordinate: { latitude: 39.3466, longitude: -106.1182 },
    reward: 180,
  },
  {
    title: "Mount Shasta",
    description:
      "Conquer the slopes of Mount Shasta, a massive stratovolcano in Northern California, and behold the breathtaking views of the surrounding volcanic landscape. Fun Fact: Mount Shasta is one of the highest peaks in the Cascade Range and is known for its spiritual significance and mountaineering challenges.",
    coordinate: { latitude: 41.4096, longitude: -122.1934 },
    reward: 280,
  },
  {
    title: "Mount Sill",
    description:
      "Scale the heights of Mount Sill, a prominent peak in California's Sierra Nevada range, and enjoy unparalleled views of the surrounding alpine beauty. Fun Fact: Mount Sill is known for its challenging climbing routes and is a popular destination among experienced mountaineers.",
    coordinate: { latitude: 37.0948, longitude: -118.5129 },
    reward: 240,
  },
  {
    title: "Castle Peak",
    description:
      "Embark on an adventure to summit Castle Peak, one of the prominent peaks in Colorado's Elk Mountains, and be rewarded with stunning vistas of the Maroon Bells-Snowmass Wilderness. Fun Fact: Castle Peak is known for its distinctive fortress-like appearance, hence its name.",
    coordinate: { latitude: 39.0098, longitude: -106.8614 },
    reward: 200,
  },
  {
    title: "Mount Bross",
    description:
      "Reach the summit of Mount Bross, one of the Fourteeners in Colorado's Mosquito Range, and enjoy panoramic views of the surrounding peaks and high-altitude alpine terrain. Fun Fact: Mount Bross is often climbed along with nearby peaks, forming a popular loop for hikers and mountaineers.",
    coordinate: { latitude: 39.3353, longitude: -106.1075 },
    reward: 190,
  },
  {
    title: "Mount Lincoln",
    description:
      "Ascend Mount Lincoln, one of the prominent Fourteeners in Colorado's Mosquito Range, and enjoy breathtaking vistas of the surrounding peaks and valleys. Fun Fact: Mount Lincoln is named after Abraham Lincoln and is known for its rugged terrain and rewarding hiking opportunities.",
    coordinate: { latitude: 39.3514, longitude: -106.1119 },
    reward: 200,
  },
  {
    title: "Mount Democrat",
    description:
      "Challenge yourself to summit Mount Democrat, one of the Fourteeners in Colorado's Mosquito Range, and experience breathtaking views of the surrounding alpine beauty. Fun Fact: Mount Democrat is known for its challenging but rewarding hiking trails and is often climbed along with nearby peaks.",
    coordinate: { latitude: 39.3393, longitude: -106.1394 },
    reward: 180,
  },
  {
    title: "Mount Evans",
    description:
      "Reach the summit of Mount Evans, one of Colorado's famous Fourteeners, and enjoy stunning views from one of the highest peaks accessible by road in North America. Fun Fact: Mount Evans is home to the highest paved road in North America, providing easy access to its breathtaking summit.",
    coordinate: { latitude: 39.5883, longitude: -105.6435 },
    reward: 240,
  },
  {
    title: "Mount Shuksan",
    description:
      "Conquer the majestic Mount Shuksan in Washington and behold its stunning glaciers, rugged peaks, and picturesque alpine scenery. Fun Fact: Mount Shuksan is often considered one of the most beautiful mountains in the North Cascades and is a popular destination for climbers and hikers alike.",
    coordinate: { latitude: 48.8255, longitude: -121.6018 },
    reward: 280,
  },
  {
    title: "Mount Stuart",
    description:
      "Embark on an exhilarating climb to the summit of Mount Stuart, one of Washington's iconic peaks, and enjoy breathtaking views of the surrounding Cascade Range. Fun Fact: Mount Stuart is the highest non-volcanic peak in Washington and is known for its challenging climbing routes.",
    coordinate: { latitude: 47.4759, longitude: -120.9016 },
    reward: 260,
  },
  {
    title: "Mount Olympus",
    description:
      "Challenge yourself to reach the summit of Mount Olympus in Washington's Olympic Range and witness the breathtaking beauty of the surrounding rainforests and coastal landscapes. Fun Fact: Mount Olympus is known for its challenging climbing routes and is part of the Olympic National Park.",
    coordinate: { latitude: 47.8021, longitude: -123.7044 },
    reward: 280,
  },
  {
    title: "Mount Hood",
    description:
      "Conquer the slopes of Mount Hood, a dormant volcano in Oregon, and experience the thrill of climbing one of the most prominent peaks in the Pacific Northwest. Fun Fact: Mount Hood is home to twelve glaciers and offers diverse terrain for both beginner and advanced mountaineers.",
    coordinate: { latitude: 45.3738, longitude: -121.6959 },
    reward: 250,
  },
  {
    title: "Mount Adams",
    description:
      "Embark on an adventure to summit Mount Adams, a stratovolcano in Washington, and be rewarded with stunning panoramic views of the Cascade Range. Fun Fact: Mount Adams is the second-highest mountain in Washington and is a popular destination for hiking, climbing, and skiing.",
    coordinate: { latitude: 46.202, longitude: -121.4904 },
    reward: 270,
  },
  {
    title: "Mount Jefferson",
    description:
      "Scale the heights of Mount Jefferson, one of the prominent peaks in Oregon's Cascade Range, and be captivated by the stunning alpine scenery and glacial features. Fun Fact: Mount Jefferson is the second-highest peak in Oregon and is characterized by its rugged beauty and challenging climbing routes.",
    coordinate: { latitude: 44.6749, longitude: -121.7995 },
    reward: 240,
  },
  {
    title: "Mount Baker",
    description:
      "Conquer the glaciated slopes of Mount Baker, an active stratovolcano in Washington, and enjoy breathtaking views of the surrounding North Cascades. Fun Fact: Mount Baker holds the world record for the greatest recorded snowfall in a single season and offers excellent opportunities for mountaineering and backcountry skiing.",
    coordinate: { latitude: 48.7768, longitude: -121.814 },
    reward: 280,
  },
  {
    title: "Granite Peak",
    description:
      "Challenge yourself to summit Granite Peak, the highest point in Montana, and enjoy unparalleled views of the surrounding Beartooth Mountains. Fun Fact: Granite Peak is known for its rugged granite cliffs and challenging climbing routes, attracting experienced mountaineers from around the world.",
    coordinate: { latitude: 45.1605, longitude: -109.8076 },
    reward: 320,
  },
  {
    title: "Mount Saint Helens",
    description:
      "Climb to the summit of Mount Saint Helens, an active stratovolcano in Washington, and witness the dramatic landscape shaped by its historic eruption. Fun Fact: Mount Saint Helens famously erupted on May 18, 1980, causing significant destruction and landscape transformation.",
    coordinate: { latitude: 46.1914, longitude: -122.1956 },
    reward: 260,
  },
  {
    title: "Mount Olympus",
    description:
      "Challenge yourself to reach the summit of Mount Olympus in Washington's Olympic Range and witness the breathtaking beauty of the surrounding rainforests and coastal landscapes. Fun Fact: Mount Olympus is known for its challenging climbing routes and is part of the Olympic National Park.",
    coordinate: { latitude: 47.8021, longitude: -123.7044 },
    reward: 280,
  },
  {
    title: "Mount San Jacinto",
    description:
      "Ascend Mount San Jacinto, one of the prominent peaks in California's San Jacinto Mountains, and enjoy stunning panoramic views of the surrounding desert and Coachella Valley. Fun Fact: Mount San Jacinto is a popular hiking destination, and its summit can be reached via scenic trails or a cable car ride.",
    coordinate: { latitude: 33.8148, longitude: -116.6797 },
    reward: 230,
  },
  {
    title: "Cloud Peak",
    description:
      "Scale the heights of Cloud Peak, the highest summit in the Bighorn Mountains of Wyoming, and be rewarded with breathtaking views of the surrounding wilderness. Fun Fact: Cloud Peak is known for its impressive vertical relief and rugged beauty, attracting climbers and hikers from far and wide.",
    coordinate: { latitude: 44.3827, longitude: -107.198 },
    reward: 290,
  },
  {
    title: "Mount Mansfield",
    description:
      "Conquer Mount Mansfield, the highest peak in Vermont, and enjoy stunning views of the surrounding Green Mountains and picturesque landscapes. Fun Fact: Mount Mansfield is a popular destination for outdoor activities, including hiking, skiing, and rock climbing, and is home to the famous Stowe Mountain Resort.",
    coordinate: { latitude: 44.5289, longitude: -72.8159 },
    reward: 220,
  },
  {
    title: "Katahdin",
    description:
      "Embark on a challenging ascent to the summit of Katahdin, the highest peak in Maine and the northern terminus of the Appalachian Trail. Fun Fact: Katahdin is part of Baxter State Park and offers diverse alpine and subalpine ecosystems, making it a haven for outdoor enthusiasts and nature lovers.",
    coordinate: { latitude: 45.9048, longitude: -68.9216 },
    reward: 250,
  },
  {
    title: "Mount Washington",
    description:
      "Experience the extreme weather conditions and stunning views from the summit of Mount Washington, the highest peak in the Northeastern United States. Fun Fact: Mount Washington is infamous for its erratic and harsh weather, with some of the highest wind speeds ever recorded on Earth.",
    coordinate: { latitude: 44.2706, longitude: -71.3033 },
    reward: 260,
  },
  {
    title: "Mount Marcy",
    description:
      "Reach the summit of Mount Marcy, the highest peak in New York's Adirondack Mountains, and enjoy panoramic views of the surrounding wilderness and alpine lakes. Fun Fact: Mount Marcy is named after New York politician William L. Marcy and is a popular destination for hiking and backpacking.",
    coordinate: { latitude: 44.1129, longitude: -73.9238 },
    reward: 240,
  },
  {
    title: "Mount Mitchell",
    description:
      "Climb to the summit of Mount Mitchell, the highest peak east of the Mississippi River, and be rewarded with stunning vistas of the Blue Ridge Mountains. Fun Fact: Mount Mitchell is located in North Carolina's Black Mountains and is part of Mount Mitchell State Park, offering hiking trails and breathtaking scenery.",
    coordinate: { latitude: 35.7656, longitude: -82.2657 },
    reward: 230,
  },
  {
    title: "Mount Katahdin",
    description:
      "Embark on a challenging ascent to the summit of Katahdin, the highest peak in Maine and the northern terminus of the Appalachian Trail. Fun Fact: Katahdin is part of Baxter State Park and offers diverse alpine and subalpine ecosystems, making it a haven for outdoor enthusiasts and nature lovers.",
    coordinate: { latitude: 45.9048, longitude: -68.9216 },
    reward: 250,
  },
  {
    title: "Mount Frissell",
    description:
      "Scale the heights of Mount Frissell, the highest point in Connecticut, and enjoy panoramic views from its summit, which straddles the border with Massachusetts. Fun Fact: Mount Frissell is part of the southern Taconic Range and offers a picturesque hike through a diverse and scenic landscape.",
    coordinate: { latitude: 42.0392, longitude: -73.4849 },
    reward: 200,
  },
  {
    title: "Mount Greylock",
    description:
      "Conquer Mount Greylock, the highest peak in Massachusetts, and be rewarded with stunning views of the Berkshire Mountains and the surrounding New England landscapes. Fun Fact: Mount Greylock is part of the Appalachian Trail and is home to Bascom Lodge, a historic mountain lodge offering accommodation and dining.",
    coordinate: { latitude: 42.6371, longitude: -73.1663 },
    reward: 220,
  },
  {
    title: "Mount Mansfield",
    description:
      "Conquer Mount Mansfield, the highest peak in Vermont, and enjoy stunning views of the surrounding Green Mountains and picturesque landscapes. Fun Fact: Mount Mansfield is a popular destination for outdoor activities, including hiking, skiing, and rock climbing, and is home to the famous Stowe Mountain Resort.",
    coordinate: { latitude: 44.5289, longitude: -72.8159 },
    reward: 220,
  },
  {
    title: "Mount Washington",
    description:
      "Experience the extreme weather conditions and stunning views from the summit of Mount Washington, the highest peak in the Northeastern United States. Fun Fact: Mount Washington is infamous for its erratic and harsh weather, with some of the highest wind speeds ever recorded on Earth.",
    coordinate: { latitude: 44.2706, longitude: -71.3033 },
    reward: 260,
  },
  {
    title: "Mount Marcy",
    description:
      "Reach the summit of Mount Marcy, the highest peak in New York's Adirondack Mountains, and enjoy panoramic views of the surrounding wilderness and alpine lakes. Fun Fact: Mount Marcy is named after New York politician William L. Marcy and is a popular destination for hiking and backpacking.",
    coordinate: { latitude: 44.1129, longitude: -73.9238 },
    reward: 240,
  },
  {
    title: "Mount Mitchell",
    description:
      "Climb to the summit of Mount Mitchell, the highest peak east of the Mississippi River, and be rewarded with stunning vistas of the Blue Ridge Mountains. Fun Fact: Mount Mitchell is located in North Carolina's Black Mountains and is part of Mount Mitchell State Park, offering hiking trails and breathtaking scenery.",
    coordinate: { latitude: 35.7656, longitude: -82.2657 },
    reward: 230,
  },
  {
    title: "Mount Elbert",
    description:
      "Scale the heights of Mount Elbert, the highest peak in Colorado and the Rocky Mountains, and be rewarded with breathtaking views of the surrounding alpine wilderness. Fun Fact: Mount Elbert is named after Samuel Hitt Elbert, a former governor of the Colorado Territory, and is a popular destination for hikers and mountaineers.",
    coordinate: { latitude: 39.1178, longitude: -106.4454 },
    reward: 290,
  },
  {
    title: "Mount Massive",
    description:
      "Ascend Mount Massive, one of the Fourteeners in Colorado's Sawatch Range, and enjoy panoramic views of the surrounding peaks and valleys. Fun Fact: Mount Massive is known for its extensive massif and is the second-highest peak in Colorado, offering a challenging but rewarding climbing experience.",
    coordinate: { latitude: 39.1875, longitude: -106.4753 },
    reward: 280,
  },
  {
    title: "Mount Harvard",
    description:
      "Challenge yourself to summit Mount Harvard, one of Colorado's Fourteeners in the Sawatch Range, and be rewarded with breathtaking views of the Collegiate Peaks and the surrounding wilderness. Fun Fact: Mount Harvard is the third-highest peak in Colorado and offers a variety of climbing routes for adventurers.",
    coordinate: { latitude: 38.9244, longitude: -106.3208 },
    reward: 270,
  },
  {
    title: "Mount Rainier",
    description:
      "Conquer the glaciated slopes of Mount Rainier, an iconic stratovolcano in Washington, and be mesmerized by the awe-inspiring views of the surrounding glaciers and alpine landscapes. Fun Fact: Mount Rainier is the highest mountain in Washington and the Cascade Range, attracting climbers from around the world.",
    coordinate: { latitude: 46.8523, longitude: -121.7603 },
    reward: 320,
  },
  {
    title: "Mount Sneffels",
    description:
      "Embark on an exhilarating climb to the summit of Mount Sneffels, one of Colorado's most picturesque Fourteeners, and enjoy breathtaking views of the San Juan Mountains. Fun Fact: Mount Sneffels is known for its distinctive pyramid shape and rugged beauty, offering a rewarding challenge to climbers and hikers.",
    coordinate: { latitude: 38.0031, longitude: -107.7924 },
    reward: 290,
  },
  {
    title: "Longs Peak",
    description:
      "Challenge yourself to summit Longs Peak, one of Colorado's most famous Fourteeners and a prominent landmark in Rocky Mountain National Park. Fun Fact: Longs Peak is known for its challenging Keyhole Route and offers stunning views of the surrounding alpine tundra and picturesque lakes.",
    coordinate: { latitude: 40.2549, longitude: -105.616 },
    reward: 310,
  },
  {
    title: "Mount Whitney",
    description:
      "Scale the heights of Mount Whitney, the highest peak in the contiguous United States, and be rewarded with breathtaking vistas of the Sierra Nevada mountain range. Fun Fact: Mount Whitney is located in California's Inyo National Forest and offers diverse climbing routes and stunning alpine scenery.",
    coordinate: { latitude: 36.5785, longitude: -118.2923 },
    reward: 330,
  },
  {
    title: "Mount Hood",
    description:
      "Conquer the slopes of Mount Hood, a dormant volcano in Oregon, and experience the thrill of climbing one of the most prominent peaks in the Pacific Northwest. Fun Fact: Mount Hood is home to twelve glaciers and offers diverse terrain for both beginner and advanced mountaineers.",
    coordinate: { latitude: 45.3738, longitude: -121.6959 },
    reward: 250,
  },
  {
    title: "Mount Adams",
    description:
      "Embark on an adventure to summit Mount Adams, a stratovolcano in Washington, and be rewarded with stunning panoramic views of the Cascade Range. Fun Fact: Mount Adams is the second-highest mountain in Washington and is a popular destination for hiking, climbing, and skiing.",
    coordinate: { latitude: 46.202, longitude: -121.4904 },
    reward: 270,
  },
  {
    title: "Mount Jefferson",
    description:
      "Scale the heights of Mount Jefferson, one of the prominent peaks in Oregon's Cascade Range, and be captivated by the stunning alpine scenery and glacial features. Fun Fact: Mount Jefferson is the second-highest peak in Oregon and is characterized by its challenging climbing routes.",
    coordinate: { latitude: 44.6749, longitude: -121.7995 },
    reward: 240,
  },
  {
    title: "Mount Shasta",
    description:
      "Conquer the majestic slopes of Mount Shasta, a stratovolcano in California, and be awed by its sheer size and stunning views of the surrounding wilderness. Fun Fact: Mount Shasta is one of the tallest peaks in the Cascade Range and offers diverse climbing routes for mountaineers of all skill levels.",
    coordinate: { latitude: 41.4096, longitude: -122.1935 },
    reward: 280,
  },
  {
    title: "Mount Baker",
    description:
      "Conquer the glaciated slopes of Mount Baker, an active stratovolcano in Washington, and enjoy breathtaking views of the surrounding North Cascades. Fun Fact: Mount Baker holds the world record for the greatest recorded snowfall in a single season and offers excellent opportunities for mountaineering and backcountry skiing.",
    coordinate: { latitude: 48.7768, longitude: -121.814 },
    reward: 280,
  },
  {
    title: "Granite Peak",
    description:
      "Challenge yourself to summit Granite Peak, the highest point in Montana, and enjoy unparalleled views of the surrounding Beartooth Mountains. Fun Fact: Granite Peak is known for its rugged granite cliffs and challenging climbing routes, attracting experienced mountaineers from around the world.",
    coordinate: { latitude: 45.1605, longitude: -109.8076 },
    reward: 320,
  },
  {
    title: "Mount Saint Helens",
    description:
      "Climb to the summit of Mount Saint Helens, an active stratovolcano in Washington, and witness the dramatic landscape shaped by its historic eruption. Fun Fact: Mount Saint Helens famously erupted on May 18, 1980, causing significant destruction and landscape transformation.",
    coordinate: { latitude: 46.1914, longitude: -122.1956 },
    reward: 260,
  },
  {
    title: "Mount Olympus",
    description:
      "Challenge yourself to reach the summit of Mount Olympus in Washington's Olympic Range and witness the breathtaking beauty of the surrounding rainforests and coastal landscapes. Fun Fact: Mount Olympus is known for its challenging climbing routes and is part of the Olympic National Park.",
    coordinate: { latitude: 47.8021, longitude: -123.7044 },
    reward: 280,
  },
  {
    title: "Mount San Jacinto",
    description:
      "Ascend Mount San Jacinto, one of the prominent peaks in California's San Jacinto Mountains, and enjoy stunning panoramic views of the surrounding desert and Coachella Valley. Fun Fact: Mount San Jacinto is a popular hiking destination, and its summit can be reached via scenic trails or a cable car ride.",
    coordinate: { latitude: 33.8148, longitude: -116.6797 },
    reward: 230,
  },
  {
    title: "Cloud Peak",
    description:
      "Scale the heights of Cloud Peak, the highest summit in the Bighorn Mountains of Wyoming, and be rewarded with breathtaking views of the surrounding wilderness. Fun Fact: Cloud Peak is known for its impressive vertical relief and rugged beauty, attracting climbers and hikers from far and wide.",
    coordinate: { latitude: 44.3827, longitude: -107.198 },
    reward: 290,
  },
  {
    title: "Mount Charleston",
    description:
      "Climb to the summit of Mount Charleston, the highest peak in the Spring Mountains of Nevada, and enjoy panoramic views of the surrounding desert landscapes and the Las Vegas Strip. Fun Fact: Mount Charleston is a popular hiking and skiing destination, offering a refreshing retreat from the desert heat.",
    coordinate: { latitude: 36.2722, longitude: -115.6956 },
    reward: 240,
  },
  {
    title: "Mount Graham",
    description:
      "Embark on a challenging ascent to the summit of Mount Graham, one of Arizona's highest peaks, and be rewarded with breathtaking views of the surrounding Coronado National Forest. Fun Fact: Mount Graham is home to several observatories due to its clear skies, making it a popular destination for astronomy enthusiasts.",
    coordinate: { latitude: 32.7011, longitude: -109.8804 },
    reward: 250,
  },
  {
    title: "Mount Baldy",
    description:
      "Conquer Mount Baldy, the highest peak in Arizona's White Mountains, and enjoy stunning views of the surrounding pine forests and high desert landscapes. Fun Fact: Mount Baldy is considered a sacred mountain by the White Mountain Apache Tribe and offers diverse hiking trails for outdoor enthusiasts.",
    coordinate: { latitude: 33.9205, longitude: -109.5631 },
    reward: 230,
  },
  {
    title: "Mount Rainer",
    description:
      "Challenge yourself to summit Mount Rainer, the highest peak in the state of Washington, and be rewarded with breathtaking views of the surrounding glaciers and alpine meadows. Fun Fact: Mount Rainier is an active stratovolcano and is considered one of the most dangerous volcanoes in the world.",
    coordinate: { latitude: 46.8523, longitude: -121.7603 },
    reward: 320,
  },
  {
    title: "Mount Olympus",
    description:
      "Embark on an epic adventure to summit Mount Olympus, the highest peak in Greece and the legendary home of the Greek gods, and be captivated by the panoramic views of the surrounding Aegean Sea and the rugged Greek landscape. Fun Fact: Mount Olympus is an important cultural and historical site, inspiring myths and legends throughout the ages.",
    coordinate: { latitude: 40.0859, longitude: 22.3589 },
    reward: 500,
  },
  {
    title: "Mount Kilimanjaro",
    description:
      "Embark on a life-changing journey to summit Mount Kilimanjaro, the highest peak in Africa and the tallest freestanding mountain in the world. Experience the diverse ecosystems, from lush rainforests to arctic glaciers, and be rewarded with awe-inspiring views from the 'Roof of Africa.'",
    coordinate: { latitude: -3.0674, longitude: 37.3556 },
    reward: 550,
  },
  {
    title: "Mount Everest",
    description:
      "Conquer the ultimate challenge and summit Mount Everest, the highest peak in the world, and be part of mountaineering history. Experience the extreme conditions, test your limits, and be rewarded with unparalleled views from the 'Top of the World.'",
    coordinate: { latitude: 27.9881, longitude: 86.9253 },
    reward: 1000,
  },
];

export default demoQuests;
