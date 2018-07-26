/**
 * @param {org.example.mynetwork.Dispense} prescribe
 * @transaction
 */
async function dispenseDrug(prescribe) {
    if (prescribe.prescription.refills > 0){
      prescribe.prescription.refills = prescribe.prescription.refills - 1; // Decrement refill count
    }
    else{
      throw "No refills remaining!";
    }
    let assetRegistry = await getAssetRegistry('org.example.mynetwork.Prescription');
    await assetRegistry.update(prescribe.prescription);
}
