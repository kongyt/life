
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BuildingListUI extends View {
		public buildingBtn1:Laya.Button;
		public buildingBtn2:Laya.Button;
		public buildingBtn3:Laya.Button;
		public clearBtn:Laya.Button;
		public clearAllBtn:Laya.Button;
		public buildingBtn4:Laya.Button;
		public buildingBtn5:Laya.Button;
		public buildingBtn6:Laya.Button;
		public buildingBtn7:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":800,"label":"取消选择","height":30},"child":[{"type":"Button","props":{"y":5,"x":5,"var":"buildingBtn1","skin":"comp/button.png","label":"建筑1"}},{"type":"Button","props":{"y":5,"x":95,"var":"buildingBtn2","skin":"comp/button.png","label":"建筑2"}},{"type":"Button","props":{"y":5,"x":185,"var":"buildingBtn3","skin":"comp/button.png","label":"建筑3"}},{"type":"Button","props":{"y":5,"x":640,"var":"clearBtn","skin":"comp/button.png","label":"取消选择"}},{"type":"Button","props":{"y":5,"x":720,"var":"clearAllBtn","skin":"comp/button.png","label":"清除所有"}},{"type":"Button","props":{"y":4,"x":275,"var":"buildingBtn4","skin":"comp/button.png","label":"建筑4"}},{"type":"Button","props":{"y":5,"x":365,"var":"buildingBtn5","skin":"comp/button.png","label":"建筑5"}},{"type":"Button","props":{"y":5,"x":455,"var":"buildingBtn6","skin":"comp/button.png","label":"建筑6"}},{"type":"Button","props":{"y":5,"x":545,"var":"buildingBtn7","skin":"comp/button.png","label":"建筑7"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BuildingListUI.uiView);
        }
    }
}
