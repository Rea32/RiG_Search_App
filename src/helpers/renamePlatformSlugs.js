
export const renamePlatformSlugs = ( { name, slug }) => {
    let platformSlug = slug;
    switch( slug ) {
        case "nintendo-switch":
            return "NSW";

        // GameBoy
        case "game-boy":
            return "GB";
        case "game-boy-advance":
            return "GBA";
        case "game-boy-color":
            return "GBC";

        // NintendoDS
        case "nintendo-3ds":
            return "N3DS";
        case "nintendo-ds":
            return "NDS";
        case "nintendo-dsi":
            return "NDSi";

        // PlayStation 
        case "playstation1":
        case "playstation2":
        case "playstation3":
        case "playstation4":
        case "playstation5":
            return `PS${platformSlug.substring(platformSlug.length - 1)}`;
        
        // XBox
        case "xbox":
            return "Xbx";
        case "xbox360":
            return "Xbx360";
        case "xbox-one":
            return "XbxOne";
        case "xbox-series-x":
            return "XbxS/X";

        case "gamecube":
            return "GC";
        case "nintendo-64":
            return "N64";

        case "dreamcast":
            return "DC";
        
        default:
            return name;

    }
}