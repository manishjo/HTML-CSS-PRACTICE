var fs = require('fs');
/*
 * GET users listing.
 */
var data = JSON.parse(fs.readFileSync('./routes/studentRecord.txt','utf-8'));

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.store = function(req, res){
		var name = req.body.Name;
		data[name] = req.body;
		console.log(typeof(data));
		fs.writeFileSync('./routes/studentRecord.txt',JSON.stringify(data));
		res.redirect('/');
	}	
exports.showList = function(req,res){
	res.render("showList",{message:"",list:data});
}