const { override, useBabelRc } = require("customize-cra");

module.exports = override (
    useBabelRc() // đang exports thèn babel ra ngoài để dùng ghi đè lên cấu hình của webpack như này gọi là cấu hình của webpack  
);