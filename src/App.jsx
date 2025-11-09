import React from 'react'

export default function App(){
  return (
    <div style={{fontFamily:'Inter,system-ui',padding:24,background:'#f7fafc',minHeight:'100vh'}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',maxWidth:1100,margin:'0 auto'}}>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <div style={{width:44,height:44,borderRadius:8,background:'linear-gradient(135deg,#2563eb,#0ea5e9)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>FL</div>
          <div>
            <div style={{fontWeight:700}}>FlowLearn</div>
            <div style={{fontSize:13,color:'#6b7280'}}>Prototype PWA</div>
          </div>
        </div>
        <nav style={{display:'flex',gap:14,color:'#6b7280'}}>Home Features AI</nav>
      </header>

      <main style={{maxWidth:1100,margin:'28px auto'}}>
        <section style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:24}}>
          <div style={{background:'#fff',padding:18,borderRadius:12,boxShadow:'0 8px 30px rgba(2,6,23,0.06)'}}>
            <h1 style={{margin:0}}>FlowLearn — NCERT-first learning PWA</h1>
            <p style={{color:'#6b7280'}}>Personalized study plans, quizzes, AI help and more.</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:18}}>
              <div style={{padding:12,borderRadius:10,background:'#fbfdff',border:'1px solid #eef2ff'}}>NCERT Integration</div>
              <div style={{padding:12,borderRadius:10,background:'#fbfdff',border:'1px solid #eef2ff'}}>AI Assistant</div>
              <div style={{padding:12,borderRadius:10,background:'#fbfdff',border:'1px solid #eef2ff'}}>Smart Timetable</div>
            </div>
          </div>

          <aside style={{background:'#fff',padding:18,borderRadius:12}}>
            <h3 style={{marginTop:0}}>Quick actions</h3>
            <button style={{background:'#2563eb',color:'#fff',padding:10,borderRadius:10,border:0}}>Get Started</button>
          </aside>
        </section>
      </main>
    </div>
  )
}
