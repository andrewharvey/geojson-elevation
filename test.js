var addElevation = require('./').addElevation,
    TileSet = require('node-hgt').TileSet,
    geojson = JSON.parse('{"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[11.958807,57.694437],[11.958706,57.69436],[11.958702,57.6943],[11.95873,57.69423],[11.958775,57.694178],[11.959325,57.693983],[11.959343,57.693915],[11.958919,57.69374],[11.958763,57.693649],[11.958981,57.693578],[11.959128,57.693533],[11.959805,57.69332],[11.960915,57.692983],[11.961078,57.69294],[11.961038,57.6929],[11.960988,57.692854],[11.960415,57.692297],[11.959866,57.691797],[11.959412,57.691391],[11.95933,57.691333],[11.960189,57.691061],[11.960364,57.691019],[11.96048,57.691003],[11.960558,57.690924],[11.960656,57.690817],[11.960674,57.690766],[11.960694,57.690668],[11.960682,57.690553],[11.960666,57.690456],[11.960655,57.690389],[11.960737,57.690324],[11.960854,57.690327],[11.960983,57.690326],[11.961107,57.690319],[11.961289,57.690291],[11.961355,57.69021],[11.961392,57.690132],[11.961458,57.690098],[11.961626,57.690049],[11.961532,57.689965],[11.961709,57.689912],[11.961912,57.689851],[11.962204,57.689791],[11.962394,57.689746],[11.962526,57.689692],[11.962712,57.689589],[11.962875,57.689473],[11.962942,57.689422],[11.963068,57.689332],[11.963259,57.68916],[11.963651,57.688846],[11.963772,57.688742],[11.963912,57.68867],[11.964271,57.688654],[11.964718,57.688664],[11.965288,57.688723],[11.965526,57.688742],[11.966276,57.68927],[11.966674,57.689149],[11.966944,57.689064],[11.967243,57.688974],[11.967626,57.688839],[11.967765,57.688925],[11.967972,57.689044],[11.968526,57.689268],[11.968716,57.68934],[11.969449,57.689659],[11.969882,57.689863],[11.970067,57.689952],[11.970183,57.69],[11.97039,57.690056],[11.970518,57.69008],[11.970732,57.690108],[11.970864,57.690113],[11.971054,57.690108],[11.971181,57.690094],[11.97133,57.690067],[11.971766,57.689967],[11.971998,57.689926],[11.972167,57.689927],[11.972287,57.689948],[11.972403,57.689997],[11.972714,57.6901],[11.973024,57.690195],[11.973106,57.690184],[11.97315,57.690144],[11.973205,57.690095],[11.973248,57.690051],[11.973326,57.689972],[11.973416,57.689893],[11.973475,57.689842],[11.97361,57.689726],[11.973776,57.689583],[11.973912,57.689465],[11.974107,57.689524],[11.974196,57.689449],[11.974327,57.689345],[11.974443,57.689353],[11.974525,57.689425],[11.974692,57.689462],[11.974923,57.689459],[11.975175,57.689422],[11.975456,57.689342],[11.975531,57.689308],[11.975575,57.689267],[11.976251,57.689386],[11.976624,57.689479],[11.976937,57.689583],[11.977596,57.689748],[11.977949,57.689836],[11.978131,57.689854],[11.978889,57.689863],[11.978975,57.689811],[11.979099,57.689677],[11.979213,57.689533],[11.979345,57.689392],[11.979414,57.689317],[11.979485,57.689237],[11.979601,57.689108],[11.979716,57.688978],[11.979833,57.688848],[11.97995,57.688717],[11.980073,57.688579],[11.980138,57.688506],[11.980216,57.688419],[11.980329,57.688291],[11.980392,57.688222],[11.980445,57.688162],[11.980564,57.688029],[11.980681,57.687898],[11.98075,57.68782],[11.980826,57.687733],[11.980926,57.68762],[11.981025,57.687498],[11.981018,57.687421],[11.98099,57.687337],[11.981137,57.68712],[11.981187,57.687051],[11.981574,57.686558],[11.981713,57.686372],[11.982067,57.685923],[11.982117,57.685822],[11.982183,57.685699],[11.982392,57.685719]]}},{"type":"Feature","properties":{},"geometry":{"type":"MultiPoint","coordinates":[[11.958807,57.694435],[11.982392,57.685719]]}}]}');

addElevation(geojson, new TileSet('./data'), function(err) {
    if (!err) {
        console.log(JSON.stringify(geojson));
    } else {
        console.log(err);
    }
});
