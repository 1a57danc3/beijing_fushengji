/*
	ListUtil 列表工具
	实现表单元素Select 的常用操作
	作者:不是我
	
	对象名:	ListUtil
	方法:
	 getSelectedIndexes (oListbox)//返回 多选列表oListbox 的 多个选中的值的 位置
	 add (oListbox, sName, sValue)//给列表oListbox 添加一个名叫sName,值为sValue的选项
	 remove (oListbox, iIndex) //删除列表oListbox指定iIndex的项
	 clear (oListbox)//清空列表所有的项
	 move (oListboxFrom, oListboxTo, iIndex)//把列表oListboxFrom里iIndex位置的项移动到列表oListboxTo
	 shiftUp (oListbox, iIndex)//把列表指定位置iIndex的项  上移一位
	 shiftDown (oListbox, iIndex)//把列表指定位置iIndex的项  下移一位
*/
var ListUtil = new Object();

ListUtil.getSelectedIndexes = function (oListbox)//返回 多选列表oListbox 的 多个选中的值的 位置
 {
    var arrIndexes = new Array;
    for (var i=0; i < oListbox.options.length; i++) {
        if (oListbox.options[i].selected) {
            arrIndexes.push(i);
        }
    }
    return arrIndexes;
};

ListUtil.add = function (oListbox, sName, sValue)//给列表oListbox 添加一个名叫sName,值为sValue的选项
 {

    var oOption = document.createElement("option");
    oOption.appendChild(document.createTextNode(sName));

    if (arguments.length == 3) {
        oOption.setAttribute("value", sValue);
    }

    oListbox.appendChild(oOption);

}

ListUtil.remove = function (oListbox, iIndex) //删除列表oListbox指定iIndex的项
{
    oListbox.remove(iIndex);
};

ListUtil.clear = function (oListbox)//清空列表所有的项
 {
    for (var i=oListbox.options.length-1; i >= 0; i--) {
        ListUtil.remove(oListbox, i);
    }
};

ListUtil.move = function (oListboxFrom, oListboxTo, iIndex)//把列表oListboxFrom里iIndex位置的项移动到列表oListboxTo
{
    var oOption = oListboxFrom.options[iIndex];
    if (oOption != null) {
        oListboxTo.appendChild(oOption);
    }
};

ListUtil.shiftUp = function (oListbox, iIndex)//把列表指定位置iIndex的项  上移一位
 {
    if (iIndex > 0) {    
        var oOption = oListbox.options[iIndex];
        var oPrevOption = oListbox.options[iIndex-1];
        oListbox.insertBefore(oOption, oPrevOption);
    }    
};

ListUtil.shiftDown = function (oListbox, iIndex)//把列表指定位置iIndex的项  下移一位

 {
    if (iIndex < oListbox.options.length - 1) {
        var oOption = oListbox.options[iIndex];
        var oNextOption = oListbox.options[iIndex+1];
        oListbox.insertBefore(oNextOption, oOption);
    }
};

