function repeat(objTemp, times, callback) {
  const list = [];
  for (let index = 0; index < times; index += 1) {
    list.push(callback(index, objTemp));
  }
  return list;
}

function resp(data) {
  return {
    success: true,
    data
  }
}

function tableResp(page, size, item) {
  const content = repeat(item, size, () => {
    return { ...item }
  });
  const data = {
    content,
    page,
    size,
    total: 1000,
  }
  return resp(data);
}

module.exports = {
  resp,
  tableResp,
};
