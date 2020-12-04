const data = [".##.#.........#.....#....#...#.",
    ".#.#.#...#.......#.............",
    "......#..#....#.#...###.......#",
    ".......###......#.....#..##..#.",
    "..#...##.......#.......###.....",
    "....###.#....###......#....#..#",
    "......#..#....#...##...........",
    "..#..#....#...#.....####.......",
    "...#........#.#.......#..#...#.",
    "......#...#........#...#..##...",
    "#..#........#............#...##",
    "..#..#.#....#...........#...###",
    "#.#..#...........#.##.#.#....#.",
    ".#.#....#...##.....#...........",
    ".....##....#...#..............#",
    "...#....#...#.#.#.#...#........",
    "#....#....#.#.#..#....#..#..#..",
    ".................#..#.....#....",
    "#..###...#.#..#.#......#.......",
    "...#..........#......#....#....",
    ".#.#.........##..#.......#...#.",
    ".#..........#...#..#...........",
    "....##.#.......................",
    ".......#...........#...#.......",
    "...#...#..##...#....###..#....#",
    "....#.#.....##...##.#.#........",
    "...........#.#..#.#......#..#..",
    ".....#.....#....#...#........#.",
    "..#......#..#.........#.....#..",
    ".........................#...#.",
    "#...#...#....#........##....#..",
    "#..#.#.............#..........#",
    ".#.........#.....#..#.#.#..#.#.",
    "#...#..#.......####.#....##....",
    "##...##..#.#.#...#.#.....#..#.#",
    ".#..#....#.##........#...#....#",
    "#...#..##.#....##..#..#.#......",
    ".#........#.....#.#....##.##.#.",
    "...#...#........#..#.##.##.....",
    "....................#.#.#.#...#",
    "..####.#..##...#....#.....##...",
    "#......#.....#.#......#.#..#.##",
    "..#.....#..#...........##.#....",
    "#....#........#............#...",
    "..##....#..............#......#",
    "..#......#.#.......####......#.",
    "..............##....#....##.#..",
    ".#...............#....#....#.#.",
    "..#.#.#..#.......##.#..........",
    ".#...#.......#.#....#.##.......",
    ".....#.##...#...........#.#....",
    "..#.#..#...#..##...#.#.......##",
    ".#.....#....#.#......#.#.......",
    "....##.........#.#.............",
    ".......##.......#..............",
    "..........#......#......#....##",
    "..##.....#..#.#..........#.....",
    "...#....#.......#....##........",
    ".......#...........#...........",
    "...#.#......#.#........#....#..",
    ".....#...........#.#.#...#.#..#",
    ".#.#...#.#.#..........#.....###",
    "#........#...#.................",
    "...##.....#.....#..#..#.......#",
    "......##...........#..#....##..",
    ".........#............##...#...",
    ".....#.....##...##.............",
    ".#....#..#.#.#.#...#..#..#.....",
    ".....#..#.#..#....#..#.........",
    "....#.....#......#...#.........",
    "#..#..#.................#......",
    ".###.....#...#.#........##.#...",
    "..#...#....#.##..#.....#.#....#",
    "..#...##.................#.#...",
    "....##..........#..#..#..#....#",
    "....#..##....##.....#.#....#...",
    ".#.#.#.....##........#.##..##.#",
    "....#..#......#..#........#....",
    ".......#.....###.#....#.......#",
    "#....#.......#......##.#.......",
    ".##.#.........#.#..##..#....##.",
    "......#........#.#....#...#....",
    ".####.....#.........#.#......##",
    "##....#......#....#..#.#....##.",
    "...........###.#.....#..#......",
    ".......#...........#...........",
    "........###....#..#.#..........",
    "....#........#......#..........",
    ".........#......#..............",
    "...#...............#......#...#",
    "....#..##...#.........#...#....",
    "##........#.#....#......###....",
    "....#.......................#..",
    "#................#.#..#......##",
    "...#.#.....#...#...........#.##",
    ".#....#.##......#...##.#....#..",
    "#...#....#..............#..#..#",
    ".......#....#.##............#.#",
    ".....#.#.......#.#...#.........",
    "...#.....#..##...##...#........",
    "..#.......#..####..#..#...#....",
    "#.#................##...##.#..#",
    ".....#.....##.#.....#......#..#",
    "....#.#...#.........#.........#",
    "..#......#............#.....#..",
    ".....#..........#.#..#..##...##",
    "........#................#.#...",
    "#...#.#....##...###...#.#......",
    ".............##.#..##..........",
    "#..#......#...........#......#.",
    "#.#....#..........#.##....###..",
    ".............#.........#....#..",
    "#........#..#.#..#...#....#....",
    "..............#..............##",
    ".....#...#..............#.##...",
    "#...##..#...........#..........",
    "..#....#...#.#........#..#.#..#",
    "..##......#...............#....",
    "....#...#..###..#......###.#...",
    ".......##..#.#........#....#...",
    "..##...#.......#...#...........",
    ".#.......#.....#.#...##..#....#",
    ".............#.......#.#.#....#",
    "#.......#..#..#...#.#......##..",
    "#.##..#..#..#....##.#...###.#.#",
    "...##...#..#..#........#.#..#..",
    "#....##........................",
    "##...#...#......#.#.....#..#...",
    "......#............#....#......",
    "#......#.......#.......##.#....",
    "..................#..#..#.#....",
    "..#..................##.#......",
    "..##........#.#.....##..#..#.#.",
    "#....#..............#....####..",
    "#..#..........................#",
    "..#.#.#.#....#.......#....#.#..",
    ".....#.#........#..........#.#.",
    "........#.....#.......#........",
    "#.....#....#.###.....#.......#.",
    ".....##.#...#.#..#...#.#.#.....",
    "......##...#.#...##..........#.",
    ".#............#.....#..#....#..",
    ".#................#.#..#.......",
    "....................##...##....",
    "#.......##...#.....#..#........",
    ".##....#.#.#.#...........#...#.",
    "..#.#..#.#.........#...........",
    "...#......#.....#...##.........",
    "..........#.#.....###.#........",
    ".............#.....##..........",
    ".........#...####........#.####",
    "...................#....#......",
    ".....#.........#.#....#..#...#.",
    ".##...#.......##.#...#.#.#..#..",
    ".....##........#....#...#.##.#.",
    "#...#...#.#....#..............#",
    "#..#.##.............#..........",
    "..#...#..#.#.##..............##",
    "#......#.#...##..........#.##..",
    ".##.#...#...#.........#.#......",
    "......#........##.#..#.........",
    "#..#.......#......#.#..#.#.....",
    ".#..#...........#.#.##.....#...",
    ".....................#..#.#....",
    "........#...##......#.....##...",
    "#.............#...##....##....#",
    "#.#...........#....##.#......##",
    ".....#.....#.#..........###..#.",
    "....#...#....##....#..##.......",
    ".#....#....#.......#.#.....#...",
    ".#...#.......##...##........#..",
    "......##.......#.##.#.###......",
    "....##.......#......#..........",
    "...................#..##.......",
    "......................#...##...",
    "...##....#.#..#..#.............",
    ".#......##..........#...#......",
    "....##..#....#..#...#...####.#.",
    "...#.......#.......#........#.#",
    "#.........#..#...#...##...#.#.#",
    "....#...#.......#...#....#.....",
    "...#.....#.##..##.#.......##.##",
    ".......#....#........#.........",
    ".....#...#....#..#....#....#...",
    ".##....#...#........#...#.#...#",
    ".......##............#..#...#..",
    "#.#...#....#......#.#..........",
    ".#.##...........#........#.....",
    ".#....#.............#.#.##.....",
    "#.......###..#...###.........#.",
    "#..#.#.......#.........#...#..#",
    "..........#......#........#...#",
    ".#.#...#.##.......##...........",
    ".....#.........#.....#.........",
    ".........#.........#....##.#..#",
    ".#.......##..##..#.....#...#...",
    ".#.....##...#..#..............#",
    "..##...#..#..#.#...#..........#",
    ".#.......####......#......####.",
    "##..##........#.....#........#.",
    "..##.#..#.#....................",
    "...........#..#...##....##.....",
    "..#.#........#.........#....##.",
    "..#...#..##..###.#..###........",
    "......#..#.............#..##...",
    ".##.........#.#..#...#.##.###..",
    ".#...............#...........#.",
    ".#....#........#....#........##",
    "..#####.#.#..#.#........##...#.",
    "###....#....#...#..............",
    ".....#...##............#...#...",
    "##...........##.#.##.....#.....",
    "..............#..#.....#...#...",
    "...................#...........",
    "#..........##.........#........",
    "...#.........#..#.....#..#..#..",
    "....###.#......#......##....#..",
    "#......#..........#...#........",
    "...#.#...#..#..........##......",
    ".....##.....#.#............##..",
    "..#..#.###....#.#.#...##....#..",
    "...#........#....##.......#....",
    ".#.............#..##.......#...",
    "..#.#..###..#.....#...##.......",
    ".........#......##...#.#..#....",
    ".............#....##....#.#....",
    "#..#...#....#.#...#......##....",
    ".............#.#......#.....###",
    "#.##....#........#.............",
    ".....#...#.####...#.....#......",
    "....#....###....##.......#.....",
    "..#....##..#....#.#.......#....",
    "...#.....#....#.........#......",
    ".#......#.#....#.#........#....",
    ".......#......#.....#.#..#.....",
    "#......#.........##.##.#...#...",
    "..#.###...................#....",
    "....#..#....##.#........#....#.",
    "...........#..........#......#.",
    ".#..#.#...###..........#..#...#",
    "...#...##..#....#...#..........",
    ".#........#.................##.",
    "....#.......##....#...#........",
    "#.#...##.##...#.#.......#...#..",
    ".....#.#.##.#......#..#..##....",
    ".....##...#.#.....#...#........",
    "#.#.......#..#..........##.....",
    "................#......#..#.#.#",
    "#......#...#...................",
    "...#.....##.#.........#.#..#..#",
    "...#..##..##.......#....#......",
    "....##...#....#..#...........#.",
    "..#..#......#...#..#...........",
    "...#.##....#...##.......#......",
    ".......#....#..#..##..#..#....#",
    ".#.................#.#...#.##..",
    ".....#..................#..#.#.",
    "...#......##...#...........#...",
    "..#.........#....#..#...#.....#",
    "..#...#.....#.........##.#.....",
    ".....#.#....##...............#.",
    "....#...#............#.........",
    ".....#.....###............#....",
    "..#.#.#.......#....#...........",
    "...........##...##...#.......#.",
    ".........###.#......#..........",
    ".#.......#....#.....#.##..#...#",
    "..#..................#..###....",
    "..#....#...#......##.........#.",
    "........#..#........#.........#",
    ".#..#......#.........#.........",
    "...#..##.....#....#....#.....#.",
    "......#.#............###.....##",
    ".......#........#.......#.#....",
    "..#.............#..............",
    ".............##..#.#.#....#....",
    ".................#....#.#......",
    "##..#.#.......#....#.....#.....",
    ".##............##.#.......#.#..",
    "#..#...........##......#.......",
    ".##......#####..##.#....#.#....",
    ".......##.....#...#........#...",
    ".#.#.....##....#..#....#..#...#",
    "............##.#.....##.#......",
    "........##...###.#......#......",
    "......#..#.#...#..#............",
    ".........#...........#......#..",
    ".#.........#............##.....",
    ".#..#..#...#.#.............#...",
    "......#.#..##...#.#...........#",
    "#.##.......#...#.........#.....",
    ".....#..#............#....##...",
    ".#......#........#.............",
    "..#...#....#..#.......###......",
    "....#.......###.#.#...........#",
    ".............#...##............",
    ".##.#.#.#...........#...#....#.",
    "............##.........#......#",
    "...............#......#...#....",
    "...#.....#..###..#...........#.",
    ".#........#.....##........#.#..",
    "....#.#.......#..#..#...##.#.#.",
    ".......##...........#...#......",
    "....#.#..##......#.......#.....",
    "..#........#.#......#.#........",
    "........#....#..#....#..##.....",
    ".#.........##..........#.#.....",
    "..##...##.....##......##..#....",
    ".###.....##...........##.#...##",
    "...#................#.......#..",
    "#.......#.#.#..#.#.##..#...#...",
    ".#.#.......#..#................",
    "..#.#.#......#............#....",
    "#.....#.###..#.#...#...........",
    "#...........#..........#.#.#.##",
    "..#.#...#......##.....#........",
    "........#.......#.#...#...#....",
    "..#..........#......###......#.",
    "..........##.#....#.....#.##...",
    "..#.....#......#.........#..##.",
    ".#...#........#..#.#..#...##..#",
    "..###........#......#.#........",
    "..#.##.#....#.#....#.#...#....."];

const test = ["..##.......",
    "#...#...#..",
    ".#....#..#.",
    "..#.#...#.#",
    ".#...##..#.",
    "..#.##.....",
    ".#.#.#....#",
    ".#........#",
    "#.##...#...",
    "#...##....#",
    ".#..#...#.#"];


function countTrees(slope, right = 3, down = 1) {
    let treeCount = 0;
    let index = 0;

    for (let i = down; i < slope.length; i += down) {
        index += right;
        treeCount += slope[i][index % slope[i].length] === '#';
    }

    return treeCount;
}

//Part 1
// console.log("This many trees:", countTrees(test));
console.log("This many trees:", countTrees(data));

//Part 2
// console.log("This many for each slope: ", [[1,1],[3,1],[5,1],[7,1],[1,2]].reduce((a, b) => countTrees(test, b[0], b[1]) * a, 1));
console.log("This many for each slope: ", [[1,1],[3,1],[5,1],[7,1],[1,2]].reduce((a, b) => countTrees(data, b[0], b[1]) * a, 1));