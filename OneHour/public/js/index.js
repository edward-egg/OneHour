$(document).ready(function(){
	$('#tree').tree({
		onClick: function(node){
			if(!node.children){
				if ($('#tabs').tabs('exists', node.text)){
					$('#tabs').tabs('select', node.text);
				} else{
					var content = `<div style="padding:20px"><form id="form" method="post" class="clearfix" style="padding: 20px;">
			        <div class="upload-photo">
			            <label for="photo">图片上传:</label>
			            <input  type="file" class="file" name="photo"></input>
			        </div>
			        <div>
			            <label for="name">客户姓名:</label>
			            <input  type="text" name="name"></input>
			        </div>
			        <div>
			            <label for="id-number">身份证号:</label>
			            <input  type="text" name="id-number"></input>
			        </div>
			        <div>
			            <label for="phone">联系电话:</label>
			            <input  type="number" name="phone"></input>
			        </div>
			        <div>
			            <label for="chuanhao">手机串号IMEI:</label>
			            <input  type="text" name="chuanhao"></input>
			        </div>
			        <div>
			            <label for="pinpai">品牌:</label>
			            <input type="text" name="pinpai"></input>
			        </div>
			        <div>
			            <label for="xinghao">型号:</label>
			            <input type="text" name="xinghao"></input>
			        </div>
			        <div>
			            <label for="toubao">投保金额:</label>
			            <input type="number" name="toubao"></input>
			        </div>
			        <div>
			        	<label for="shengxiao">生效日期:</label>
			        	<input id="shengxiao" type="text" class="easyui-datebox">
			        </div>
			        <div>
			        	<label for="daoqi">到期日期:</label>
			        	<input id="daoqi" type="text" class="easyui-datebox">
			        </div>
			        <div>
			            <label for="xiaoshou">销售价格:</label>
			            <input type="number" name="xiaoshou"></input>
			        </div>
			       <div>
			            <label for="caozuo">操作员:</label>
			            <input type="text" name="caozuo"></input>
			        </div>
			        <!--<div>
			            <input type="submit" value="Submit">
			        </div>-->
			    </form></div>`
					$('#tabs').tabs('add',{
						title: node.text,
						content: content,
						closable:true,
						style:'padding:"20px"',
					});	
					
				}
			}
		},
		onSelect:function(node){
			console.log(node)
		}
	});
	$('#tb').datagrid({
		data: [
			{
				'pinpai':'OPPO',
				'xinghao':'A57',
				'price':'55',
				'baoe':'100',
				'baoe6':'94',
				'lingshou':'66.00',
				'chazhao':'5'
			},
			{
				'pinpai':'OPPO',
				'xinghao':'A57',
				'price':'55',
				'baoe':'100',
				'baoe6':'94',
				'lingshou':'66.00',
				'chazhao':'5'
			},
			{
				'pinpai':'OPPO',
				'xinghao':'A57',
				'price':'55',
				'baoe':'100',
				'baoe6':'94',
				'lingshou':'66.00',
				'chazhao':'5'
			},
		]
	});
	
})