// export const formatName = (value: string): string => {
//   return value.replace(/[0-9]/g, "");
// };

// export const formatCPF = (value: string): string => {
//   const cleanValue = value.replace(/\D/g, "");

//   let maskedValue = "";
//   if (cleanValue.length > 9) {
//     maskedValue = cleanValue.replace(
//       /(\d{3})(\d{3})(\d{3})(\d{0,2})/,
//       "$1.$2.$3-$4",
//     );
//   } else if (cleanValue.length > 6) {
//     maskedValue = cleanValue.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
//   } else if (cleanValue.length > 3) {
//     maskedValue = cleanValue.replace(/(\d{3})(\d{0,3})/, "$1.$2");
//   } else {
//     maskedValue = cleanValue;
//   }

//   return maskedValue;
// };

// export const formatPhone = (value: string): string => {
//   return value
//     .replace(/\D/g, "")
//     .replace(/^(\d{2})(\d)/g, "($1) $2")
//     .replace(/(\d{4,5})(\d{4})$/, "$1-$2")
//     .slice(0, 15);
// };
