
# 同人活動參場情報 with google 試算表

## 用途

利用 google 試算表統一管理參場資訊與販售物，讓手上所有網站（包括weebly等可自行編輯html的架站系統）自行讀取場次資料。

適用對象：跟我一樣除了噗浪以外，也有經營社團網站和Blog，甚至每個作品都有專屬特設站，但不想每次參場都要一個個更新所有網站的人。

PS：作者剛學JS沒多久也不太會用git，程式問題可能很多，歡迎給予建議和一起討論。

## 實際Demo

<http://codepen.io/anon/pen/DmleB>

## 使用方法

### 前置作業

1. 建立場次資料試算表

	複製下面的 Google 試算表，改成自己的場次資料。 

	<https://docs.google.com/spreadsheets/d/1afL3l8d6tdBvjzCNYgQSeqRGy6O8lwML8yJloGth0jU/edit?usp=sharing>

	欄位填寫方式請參考試算表最後一格的說明。

2. 把試算表轉成JSON格式
	
	參照下面文章，把剛才的試算表轉成JSON，取得剛才做好的試算表JSON網址。
	<http://pipetree.com/qmacro/blog/2013/10/sheetasjson-google-spreadsheet-data-as-json/>
	

### 安裝

1. 把`doujinnews.html.erb`的內容貼到要顯示場次資訊的地方。  
	跟一般插入blog widget方法一樣。

2. 修改`doujinEventNew.js`，把前置作業轉好的JSON網址貼到`var googleJson ="";`引號裡去。

	EX：`var googleJson ="";`

3. 在上一步驟同一頁html中插入jQuery和js  
	* jQuery：`<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>`
	* Javascript：`<script src="http://github/js">`

	建議是放在`</body>`前面。

4. 完成，只要更新google場次資料的試算表，網頁上的資料就會跟著一起更動。

### License

<del>沒想到我也有可以寫授權這塊的一天</del>

Copyright (c) 2014 Itsuki.  
See the LICENSE file for license rights and limitations (MIT).
