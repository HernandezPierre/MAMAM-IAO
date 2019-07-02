$(".item.song").click(function() { 
	var inx = $(".item.song").index(this);
	var title = $(".item.song")
	var title = title[inx].innerHTML.trim().slice(0,-4);
	var contentTitle = '<img src="/data/img/pdf.svg" alt="'+ title +'" style="width:30px; height:30px;"></img> '+title;

	var contentPdf = '<embed src="/data/partition/'+title+'.pdf" style="width:600px; height:500px;" >';
	$("#part-div").html(contentTitle);
	$("#body-song__partition").html(contentPdf);
});
