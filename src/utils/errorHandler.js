const errorCodes = {
  updateOrderFailed: '更新失敗,請稍後再試',
  noSelected: '尚未選擇任何城市，請重新選擇後再次搜尋。',
};

export default (swal, errorCode) => {
  if (errorCodes[errorCode]) {
    swal({
      icon: 'error',
      title: '失敗',
      text: errorCodes[errorCode],
    });
  } else {
    console.error(errorCode);
    swal({
      icon: 'error',
      title: '失敗',
      text: 'sorry，目前服務不可用，請稍後再試或聯絡管理員。',
    });
  }
};
