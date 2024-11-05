function HomePage() {
  return (
    <div className="HomePage">
        <div>
            <div class="logo">
                <h1>Student Centered E-learning Environment Fakultas Ilmu Komputer</h1>
            </div>
            <div class="user-info">
                <span>John Johnson - 123456789</span>
            </div>
        </div>
        
        <div class="container">
            <aside>
                <div class="section">
                    <h3>Clock</h3>
                    <p>Server: <strong>Sun 13:25:40</strong></p>
                </div>
                <div class="section">
                    <h3>My courses</h3>
                    <ul>
                        <li>[KI] Databases (A) Gasal 2024/2025</li>
                        <li>[KI] Human-Computer Interaction (A) Gasal 2024/2025</li>
                        <li>[KI] Platform-Based Development (A) Gasal 2024/2025</li>
                        <li>[KI] Scientific Writing & Research Methodology (A) Gasal 2024/2025</li>
                    </ul>
                </div>
                <div class="section">
                    <h3>Calendar</h3>
                </div>
            </aside>
            
            <main>
                <h2>Pengumuman Akademis</h2>
                <div class="announcement">
                    <h3>Lanjut Studi S2 Prodi MIK / MTI Tanpa Tes bagi Lulusan S1 Fasilkom (1 tahun terakhir)</h3>
                    <p>by Muhammad Muslih Muhtadi - Thursday, 3 October 2024, 11:46 AM</p>
                    <p>Kepada Alumni Program Sarjana Fasilkom UI,</p>
                    <p>Khususnya lulusan Semester Gasal dan Genap 2023/2024...</p>
                </div>
            </main>

            <aside class="quick-access">
                <div class="section">
                    <h3>Akses cepat</h3>
                    <ul>
                        <li>Scele MTI</li>
                        <li>Office 365 - Universitas Indonesia</li>
                        <li>Azure Dev Tools - Universitas Indonesia</li>
                    </ul>
                </div>
                <div class="section">
                    <h3>Info Akun SSO/LDAP</h3>
                    <p>Sistem Akun UI adalah sebuah sistem terintegrasi berbasis Single Sign On (SSO)...</p>
                </div>
            </aside>
        </div>
    </div>
  );
}

export default HomePage;
