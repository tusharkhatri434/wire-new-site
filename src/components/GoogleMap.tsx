export default function GoogleMap() {
  return (
    <div className="w-full h-80 mt-10 p-2 rounded-lg overflow-hidden">
      <iframe
      className="rounded-lg"
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.3623481881014!2d77.67016277410862!3d28.946975269734576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c640eca4b1a1f%3A0x173ea44388a2dcfc!2sMohkampur%20Industrial%20Area%20Phase-II!5e0!3m2!1sen!2sin!4v1754797683962!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
