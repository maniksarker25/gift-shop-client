// import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
// import { Buffer } from "buffer";

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
//   header: {
//     fontSize: 20,
//     marginBottom: 10,
//     fontWeight: "bold",
//   },
//   text: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
// });

// const generatePDFData = (saleInfo: any): Uint8Array => {
//   const { giftId, quantity, buyerName, date } = saleInfo;

//   // Create a PDF document
//   const MyDocument = (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text style={styles.header}>Sale Information</Text>
//           <Text style={styles.text}>Gift ID: {giftId}</Text>
//           <Text style={styles.text}>Quantity: {quantity}</Text>
//           <Text style={styles.text}>Buyer Name: {buyerName}</Text>
//           <Text style={styles.text}>Date: {date}</Text>
//         </View>
//       </Page>
//     </Document>
//   );

//   // Render the document to PDF data
//   const pdfData = MyDocument.toBuffer();

//   return pdfData;
// };

// export default generatePDFData;
