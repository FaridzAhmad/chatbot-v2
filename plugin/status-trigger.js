// netlify/plugins/deploy-status-trigger.js

module.exports = {
    onEnd: async ({ utils: { status }, logs }) => {
      // Konfigurasi tulisan yang menandakan sukses di dalam log
      const successIndicator = 'Bot success conneted to server';
  
      // Ambil log dari hasil build
      const buildLogs = logs.split('\n');
  
      // Cek apakah tulisan sukses ada di dalam log
      const buildSuccess = buildLogs.some(log => log.toLowerCase().includes(successIndicator));
  
      // Jika sukses, atur status deploy menjadi success
      if (buildSuccess) {
        await status.show({
          title: 'Custom Status',
          summary: 'Deploy succeeded!',
          text: `Found "${successIndicator}" in the logs.`,
          indicator: 'success',
        });
      }
    },
  };
  