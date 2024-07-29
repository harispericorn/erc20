async function main() {
  const bytes = Buffer.alloc(
    32,
    // '0x1759cc0d3161f1eb79f65847d4feb9d1f74fb79014698a23b16b28b9cd4c37e3'
    // '0xd8221ad202d71302027adab3706f9e8731b76b870bc1a163b0922ac5d91a905f'
    // '0x9fa161D01526309dc7fca950463473cd2BD982C4'
    // '0x4Aed70Ca724C2c268A4047A89A5d0Ee5Ee3D92ce'
    // '0x7cacBe439EaD55fa1c22790330b12835c6884a91'
    // '0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1'
    "0x66f8d77ac8d04737fb9c20e79af761d7e3cc4b6bc9925d6f0b955815dc283315"
    // '0x0130783730466563393565663936366145344561623945334241396336333839663078344165643730436137323443326332363841343034374138394135643045000000000000000101'
    // '0x003078364663623937353533443431353136436232323861633033466443384239307834416564373043613732344332633236384134303437413839413564304500000000000f4240'
    // '0x003078376361634265343339456144353566613163323237393033333062313238307834416564373043613732344332633236384134303437413839413564304500000000000f4240'
    // 73 // '0x003078313735396363306433313631663165623739663635383437643466656239307834416564373043613732344332633236384134303437413839413564304500000000000f4240'
    //73 // '0x003078376361634265343339456144353566613163323237393033333062313238307834416564373043613732344332633236384134303437413839413564304500000000000f4240'
  );

  console.log("bytes =======");
  console.log(bytes);

  const bytes32 = new Uint32Array(bytes);

  console.log("bytes32 =======");
  console.log(bytes32);

  [
    48, 120, 54, 54, 102, 56, 100, 55, 55, 97, 99, 56, 100, 48, 52, 55, 51, 55,
    102, 98, 57, 99, 50, 48, 101, 55, 57, 97, 102, 55, 54, 49,
  ];
}

main();
