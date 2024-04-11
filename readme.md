### korean.
### alert-dialog. How to use.
shadcn ui의 alert-dialog를 react 아닌 프로젝트에서 사용해보자.

#### html파일에 아래 코드를 추가해준다.
```
html

<div class="alert-dialog-overlay" id="alertDialogOverlay">
    <div class="alert-dialog-content">
        <div class="alert-dialog-header">
            <h2 class="alert-dialog-title"></h2>
            <p class="alert-dialog-description">설명</p>
        </div>
        <div class="alert-dialog-footer">
            <button class="alert-dialog-cancel">취소</button>
            <button class="alert-dialog-action">확인</button>
        </div>
    </div>
</div>

확인버튼과 취소버튼은 필요에 따라 취사선택.
js파일에서도 주석처리 되어있으니, 필요시 살려서 사용.

```

#### alert에 관한 css파일을 연결해주자.
```
/** 파일위치는 알아서 지정해줄 것. **/
<link rel="stylesheet" href="alertDialog.css">

```

#### alert에 관한 javascript파일을 연결해주자.
```
/** 파일위치는 알아서 지정해줄 것. **/
<script defer src="alertDialog.js"></script>

```

#### 마지막으로 자바스크립트를 통해 불러오자.
```
if (~~~~) {
    alertDialogOpen("~~~~.");
    // alert("~~~~."); 이것과 같은 역할.
    return;
}

```


### English
### Alert Dialog. How to Use
Let's use an alert dialog(from shadcn ui) instead of the regular alert.

#### Add the following code to your HTML file
```
html

<div class="alert-dialog-overlay" id="alertDialogOverlay">
  <div class="alert-dialog-content">
    <div class="alert-dialog-header">
      <h2 class="alert-dialog-title"></h2>
      <p class="alert-dialog-description">Description</p>
    </div>
    <div class="alert-dialog-footer">
      <button class="alert-dialog-cancel">Cancel</button>
      <button class="alert-dialog-action">Confirm</button>
    </div>
  </div>
</div>

Include the confirm and cancel buttons as needed.
The JavaScript file has the corresponding code commented out, so uncomment it if needed.

```

### Link the CSS file for the alert dialog:
```
/** Set the file path accordingly **/
<link rel="stylesheet" href="alertDialog.css">
```

### Link the JavaScript file for the alert dialog:
```
/** Set the file path accordingly **/
<script defer src="alertDialog.js"></script>
Finally, call the alert dialog from your JavaScript:
javascript

if (~~~~) {
  alertDialogOpen("~~~~.");
  // Same as alert("~~~~.");
  return;
}
```