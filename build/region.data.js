"use strict";
let regionData = {
    "1": {
        id: 1,
        locations: [
            67, 68, 71, 73, 76, 80, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
            98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 120, 130, 131, 132,
            133, 134, 136, 147, 151, 152, 154, 155, 157, 158, 159, 160, 161, 162, 231,
            232, 233, 234, 491, 492, 493, 494, 495, 496, 497, 498, 500, 501, 502, 503,
            504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518,
            519, 520, 521, 526, 527, 528, 529, 799, 805, 806, 807, 808, 809, 810, 811,
        ],
        name: "kanto",
        names: "Kanto",
        pokedexes: [
            {
                name: "kanto",
                url: "https://pokeapi.co/api/v2/pokedex/2/",
            },
            {
                name: "letsgo-kanto",
                url: "https://pokeapi.co/api/v2/pokedex/26/",
            },
        ],
    },
    "2": {
        id: 2,
        locations: [
            65, 66, 69, 70, 72, 74, 75, 77, 78, 79, 81, 82, 83, 84, 85, 108, 110, 111,
            112, 113, 114, 115, 116, 117, 118, 119, 121, 122, 123, 124, 125, 126, 127,
            128, 129, 135, 137, 138, 139, 140, 141, 148, 149, 150, 153, 156, 228, 229,
            230, 236, 237, 238, 239, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250,
            252, 800, 814,
        ],
        name: "johto",
        names: "Johto",
        pokedexes: [
            {
                name: "original-johto",
                url: "https://pokeapi.co/api/v2/pokedex/3/",
            },
            {
                name: "updated-johto",
                url: "https://pokeapi.co/api/v2/pokedex/7/",
            },
        ],
    },
    "3": {
        id: 3,
        locations: [
            429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443,
            444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458,
            459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473,
            474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488,
            489, 490, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579,
            580, 581, 582, 583, 584, 585, 586, 691, 692, 693, 694, 695, 696, 697, 698,
            699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 801, 803, 804, 812,
            813,
        ],
        name: "hoenn",
        names: "Hoenn",
        pokedexes: [
            {
                name: "hoenn",
                url: "https://pokeapi.co/api/v2/pokedex/4/",
            },
            {
                name: "updated-hoenn",
                url: "https://pokeapi.co/api/v2/pokedex/15/",
            },
        ],
    },
    "4": {
        id: 4,
        locations: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22,
            23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
            59, 60, 61, 62, 63, 64, 163, 164, 165, 167, 168, 169, 170, 171, 172, 173,
            174, 175, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
            190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204,
            205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219,
            220, 221, 222, 223, 224, 225, 226, 227, 802,
        ],
        name: "sinnoh",
        names: "Sinnoh",
        pokedexes: [
            {
                name: "original-sinnoh",
                url: "https://pokeapi.co/api/v2/pokedex/5/",
            },
            {
                name: "extended-sinnoh",
                url: "https://pokeapi.co/api/v2/pokedex/6/",
            },
        ],
    },
    "5": {
        id: 5,
        locations: [
            344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358,
            359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373,
            374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388,
            389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403,
            404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418,
            419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 531, 532, 533, 534, 535,
            536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550,
            551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565,
            566,
        ],
        name: "unova",
        names: "Unova",
        pokedexes: [
            {
                name: "original-unova",
                url: "https://pokeapi.co/api/v2/pokedex/8/",
            },
            {
                name: "updated-unova",
                url: "https://pokeapi.co/api/v2/pokedex/9/",
            },
        ],
    },
    "6": {
        id: 6,
        locations: [
            587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601,
            602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616,
            617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631,
            632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646,
            647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661,
            662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676,
            677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690,
        ],
        name: "kalos",
        names: "Kalos",
        pokedexes: [
            {
                name: "kalos-central",
                url: "https://pokeapi.co/api/v2/pokedex/12/",
            },
            {
                name: "kalos-coastal",
                url: "https://pokeapi.co/api/v2/pokedex/13/",
            },
            {
                name: "kalos-mountain",
                url: "https://pokeapi.co/api/v2/pokedex/14/",
            },
        ],
    },
    "7": {
        id: 7,
        locations: [
            710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724,
            725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739,
            740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754,
            755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769,
            770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784,
            785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798,
        ],
        name: "alola",
        names: "Alola",
        pokedexes: [
            {
                name: "original-alola",
                url: "https://pokeapi.co/api/v2/pokedex/16/",
            },
            {
                name: "original-melemele",
                url: "https://pokeapi.co/api/v2/pokedex/17/",
            },
            {
                name: "original-akala",
                url: "https://pokeapi.co/api/v2/pokedex/18/",
            },
            {
                name: "original-ulaula",
                url: "https://pokeapi.co/api/v2/pokedex/19/",
            },
            {
                name: "original-poni",
                url: "https://pokeapi.co/api/v2/pokedex/20/",
            },
            {
                name: "updated-alola",
                url: "https://pokeapi.co/api/v2/pokedex/21/",
            },
            {
                name: "updated-melemele",
                url: "https://pokeapi.co/api/v2/pokedex/22/",
            },
            {
                name: "updated-akala",
                url: "https://pokeapi.co/api/v2/pokedex/23/",
            },
            {
                name: "updated-ulaula",
                url: "https://pokeapi.co/api/v2/pokedex/24/",
            },
            {
                name: "updated-poni",
                url: "https://pokeapi.co/api/v2/pokedex/25/",
            },
        ],
    },
    "8": {
        id: 8,
        locations: [],
        name: "galar",
        names: "Galar",
        pokedexes: [
            {
                name: "galar",
                url: "https://pokeapi.co/api/v2/pokedex/27/",
            },
            {
                name: "isle-of-armor",
                url: "https://pokeapi.co/api/v2/pokedex/28/",
            },
            {
                name: "crown-tundra",
                url: "https://pokeapi.co/api/v2/pokedex/29/",
            },
        ],
    },
    "9": {
        id: 9,
        locations: [],
        name: "hisui",
        names: "Hisui",
        pokedexes: [
            {
                name: "hisui",
                url: "https://pokeapi.co/api/v2/pokedex/30/",
            },
        ],
    },
};
// "10": {
//     "id": 10,
//     "locations": [],
//     "name": "paldea",
//     "names": [],
//     "pokedexes": []
// }
