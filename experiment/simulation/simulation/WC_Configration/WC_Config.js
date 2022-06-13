var WoodCuttingObj = WoodCuttingObj || {};

//$(function () {
	

WoodCuttingObj.LevelOneConfig = function(){
			
			
			var WC_level1 = '';
			WC_level1 +='<div class="row">' 
				+'<div class="col-sm-12 col-md-3 col-xl-2" id="ConfigSection">'
				
				+'<h1>Select Coordinates</h1>'
				+'<div class="InputSection">'
				+'<div class="row ">'
					

						+'<div class="col-sm-12 col-md-12 col-xl-12" style="margin-bottom:10px;">'
						+'<div id="OtherOPPro">'
				    	
				        +'<h3>X Scan Pitch</h3>'
				        +'<input type="number" id="VecterFillError" step="1" min = "0" max = "100" class="form-control" placeholder="X Scan Pitch"> '
				        +'<h3>Y Scan Pitch</h3>'
				        +'<input type="number" id="tooldiameter" step="1" min = "0" max = "100" class="form-control" placeholder="Y Scan Pitch"> '
				        +'<h3>Z Bottom</h3>'
				        +'<input type="number" id="tooloverlap"  step="1" min = "0" max = "100" class="form-control" placeholder="Z Bottom"> <br><br>'
				    
				    	+'<button id="OPFormatBtn" class="btn btn-success">Scan</button>'
				    	+'</div>'
						+'</div>'
						+'<div class="col-sm-12 col-md-12 col-xl-12" style="margin-top:10px;">'
						
							+'</div>'
						
						+ '</div>'
//						
						
						+'</div>'
						+'</div>'
						
						
						+'<div class="col-sm-12 col-md-9 col-xl-10" id="WoodCuttingSection">'
						+'<i class="fa fa-expand" aria-hidden="true" id="ExpandDiv" style="display:none"></i>'
						+'<h1>3D Scanning</h1>'
						+'<div id="WC_canvas"></div>'
						+'</div>'
						+'<div class="col-sm-12 col-md-2 col-xl-2" id="WCuttingConfgration" style="display:none">'
						
						+'</div>'
						+'</div>'
						
						
			$("#mainDiv").html('');
			$("#mainDiv").html(WC_level1);
			
			 paper = Raphael("WC_canvas", 1400, 800);	
			 
			 
			 $("#OPFormatBtn").click( function ()
						{
				 
				 MachineDrawing_3DScanning();
				$("#OPFormatBtn").attr("disabled", true);
				 
						});
						
			 
			 
			 
}	 
