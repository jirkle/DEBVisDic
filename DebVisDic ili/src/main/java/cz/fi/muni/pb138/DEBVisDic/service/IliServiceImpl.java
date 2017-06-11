package cz.fi.muni.pb138.DEBVisDic.service;

import cz.fi.muni.pb138.DEBVisDic.service.interfaces.IliService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * Implementation of IliService class
 *
 * @author Tomas Kopecky
 */
@Service
@Transactional
public class IliServiceImpl implements IliService {

    private static final Logger logger = LoggerFactory.getLogger(IliServiceImpl.class);

    @Value(value = "classpath:iliFiles/ili-map-pwn31.tab")
    private Resource iliTabFile31;

    @Value(value = "classpath:iliFiles/ili-map-pwn30.tab")
    private Resource iliTabFile30;

    @Value(value = "classpath:iliFiles/ili-map-wn30.ttl")
    private Resource iliTtlFile30;

    @Value(value = "classpath:iliFiles/ili-map-wn31.ttl")
    private Resource iliTtlFile31;

    @Value(value = "classpath:iliFiles/ili-map-odwn13.ttl")
    private Resource iliTtlFile13;

    @Value(value = "classpath:iliFiles/ili-map.ttl")
    private Resource iliMapTtlFile;

    @Value(value = "classpath:iliFiles/ili.ttl")
    private Resource iliTtlFile;

    @Value(value = "classpath:iliFiles/changes-in-wn31.csv")
    private Resource iliCsvFile;

    @Override
    public String getIliTab31(String id) throws IOException {
        return (id != null) ? getIliFromTabFile(id, iliTabFile31.getInputStream()) : null;
    }

    @Override
    public String getIliTab30(String id) throws IOException {
        return (id != null) ? getIliFromTabFile(id, iliTabFile30.getInputStream()) : null;
    }

    @Override
    public String getIliTtl30(String id) throws IOException {
        return (id != null) ? getIliFromTtlFile(id, iliTtlFile30.getInputStream()) : null;
    }

    @Override
    public String getIliTtl31(String id) throws IOException {
        return (id != null) ? getIliFromOtherTtlFile(id, iliTtlFile31.getInputStream()) : null;
    }

    @Override
    public String getIliTtl13(String id) throws IOException {
        return (id != null) ? getIliFromOtherTtlFile(id, iliTtlFile13.getInputStream()) : null;
    }

    @Override
    public String getIliTtlMap(String id) throws IOException {
        return (id != null) ? getIliFromTtlFile(id, iliMapTtlFile.getInputStream()) : null;
    }

    @Override
    public String getIliCsv(String id) throws IOException {
        return (id != null) ? getIliFromCsvFile(id, iliCsvFile.getInputStream()) : null;
    }

    @Override
    public String getIliMainTtl(String id) throws IOException {
        return (id != null) ? getIliFromMainTtlFile(id, iliTtlFile.getInputStream()) : null;
    }

    /**
     * Private method for parsing ILI from specified file (this case == main ILI file),
     * some could be reused for more files some could not
     *
     * @param id ID we are looking for in file
     * @param is Input stream from file
     * @return String value of ILI
     * @throws IOException if something went wrong (e.g. file could not be opened)
     */
    private String getIliFromMainTtlFile(String id, InputStream is) throws IOException {
        BufferedReader br = null;

        String line;
        try {
            String ili = "";
            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null) {
                if (line.contains("<i")) {
                    ili = line.split("\\s+")[0].replace("<", "").replace(">", "");
                }
                if (line.contains(id)) {
                    if (line.split("\\s+")[2].split(":")[1].equals(id)) {
                        return ili;
                    }
                }
            }
        } catch (IOException e) {
            logger.error("Service: " + e.getMessage());
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    logger.error("Service: " + e.getMessage());
                    e.printStackTrace();
                }
            }
        }
        return null;
    }

    /**
     * Private method for parsing ILI from specified file (this case == CSV ILI file),
     * some could be reused for more files some could not
     *
     * @param id ID we are looking for in file
     * @param is Input stream from file
     * @return String value of ILI
     * @throws IOException if something went wrong (e.g. file could not be opened)
     */
    private String getIliFromCsvFile(String id, InputStream is) throws IOException {
        BufferedReader br = null;

        String line;
        try {
            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null) {
                String[] splitted = line.split(",");
                if (splitted[2].equals(id)) {
                    return splitted[1];
                }
            }

        } catch (IOException e) {
            logger.error("Service: " + e.getMessage());
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    logger.error("Service: " + e.getMessage());
                    e.printStackTrace();
                }
            }
        }
        return null;
    }

    /**
     * Private method for parsing ILI from specified file (this case == TTL 3.0 ILI file),
     * some could be reused for more files some could not
     *
     * @param id ID we are looking for in file
     * @param is Input stream from file
     * @return String value of ILI
     * @throws IOException if something went wrong (e.g. file could not be opened)
     */
    private String getIliFromTtlFile(String id, InputStream is) throws IOException {
        BufferedReader br = null;

        String line;
        try {

            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null) {
                if (line.startsWith("@") || line.startsWith("#") || line.isEmpty()) {
                    continue;
                }
                String[] splitted = line.split("\\s+");
                String[] fileId = splitted[2].split(":");
                if (fileId[1].equals(id)) {
                    return splitted[0].replace("<", "").replace(">", "");
                }
            }

        } catch (IOException e) {
            logger.error("Service: " + e.getMessage());
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    logger.error("Service: " + e.getMessage());
                    e.printStackTrace();
                }
            }
        }
        return null;
    }

    /**
     * Private method for parsing ILI from specified file (this case == TTL 1.3 ILI file),
     * some could be reused for more files some could not
     *
     * @param id ID we are looking for in file
     * @param is Input stream from file
     * @return String value of ILI
     * @throws IOException if something went wrong (e.g. file could not be opened)
     */
    private String getIliFromOtherTtlFile(String id, InputStream is) throws IOException {
        BufferedReader br = null;

        String line;
        try {

            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null) {
                if (line.startsWith("@") || line.startsWith("#") || line.isEmpty()) {
                    continue;
                }
                String[] splitted = line.split("\\s+");
                String[] fileId = splitted[2].split(":");
                if (fileId[1].equals(id)) {
                    return splitted[0].split(":")[1];
                }
            }

        } catch (IOException e) {
            logger.error("Service: " + e.getMessage());
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    logger.error("Service: " + e.getMessage());
                    e.printStackTrace();
                }
            }
        }
        return null;
    }

    /**
     * Private method for parsing ILI from specified file (this case == TAB ILI file),
     * some could be reused for more files some could not
     *
     * @param id ID we are looking for in file
     * @param is Input stream from file
     * @return String value of ILI
     * @throws IOException if something went wrong (e.g. file could not be opened)
     */
    private String getIliFromTabFile(String id, InputStream is) throws IOException {
        BufferedReader br = null;

        String line;
        try {
            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null) {
                String[] splitted = line.split("\t");
                if (splitted[1].equals(id)) {
                    return splitted[0];
                }
            }

        } catch (IOException e) {
            logger.error("Service: " + e.getMessage());
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    logger.error("Service: " + e.getMessage());
                    e.printStackTrace();
                }
            }
        }
        return null;
    }
}
