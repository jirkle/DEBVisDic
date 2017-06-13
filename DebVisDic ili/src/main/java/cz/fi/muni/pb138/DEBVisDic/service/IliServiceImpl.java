package cz.fi.muni.pb138.DEBVisDic.service;

import cz.fi.muni.pb138.DEBVisDic.service.interfaces.IliService;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
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
        return getIliFromTabFile(id, iliTabFile31.getInputStream());
    }

    @Override
    public String getIliTab30(String id) throws IOException {

        return getIliFromTabFile(id, iliTabFile30.getInputStream());
    }

    @Override
    public String getIliTtl30(String id) throws IOException {
        return getIliFromTtl30File(id, iliTtlFile30.getInputStream());
    }

    @Override
    public String getIliTtl31(String id) throws IOException {
        return getIliFrom31TtlFile(id, iliTtlFile31.getInputStream());
    }

    @Override
    public String getIliTtl13(String id) throws IOException {
        return getIliFrom31TtlFile(id, iliTtlFile13.getInputStream());
    }

    @Override
    public String getIliTtlMap(String id) throws IOException {
        return getIliFromTtl30File(id, iliMapTtlFile.getInputStream());
    }

    @Override
    public String getIliCsv(String id) throws IOException {
        return getIliFromCsvFile(id, iliCsvFile.getInputStream());
    }

    @Override
    public String getIliMainTtl(String id) throws IOException {
        return getIliFromMainTtlFile(id, iliTtlFile.getInputStream());
    }

    /**
     * Private method for parsing ILI from specified file (this case == main ILI file)
     *
     * @param id ID we are looking for in file
     * @param is Input stream from file
     * @return String value of ILI
     * @throws IOException if something went wrong
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
            e.printStackTrace();
            logger.error("Service: " + e.getMessage());
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                    logger.error("Service: " + e.getMessage());
                }
            }
        }
        return null;
    }

    /**
     * Private method for parsing ILI from specified file (this case == CSV ILI file)
     *
     * @param id ID we are looking for in file
     * @param is Input stream from file
     * @return String value of ILI
     * @throws IOException if something went wrong
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
            e.printStackTrace();
            logger.error("Service: " + e.getMessage());
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                    logger.error("Service: " + e.getMessage());
                }
            }
        }
        return null;
    }

    /**
     * Private method for parsing ILI from specified file (this case == TTL 3.0 ILI file)
     *
     * @param id ID we are looking for in file
     * @param is Input stream from file
     * @return String value of ILI
     * @throws IOException if something went wrong
     */
    private String getIliFromTtl30File(String id, InputStream is) throws IOException {
        BufferedReader br = null;

        String line;
        try {

            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null) {
                if (line.startsWith("@") || line.startsWith("#") || line.isEmpty()) {
                    continue;
                }
                String[] halfOfLine = line.split("#");

                String[] splitted = halfOfLine[0].split("\\s+");
                String[] fileId = splitted[2].split(":");
                if (fileId[1].equals(id)) {
                    try {
                        String[] words = halfOfLine[1].split(",\\s+");
                        String tmpString = words[0].substring(1, words[0].length());
                        words[0] = tmpString;
                        String ili = splitted[0].replace("<", "").replace(">", "");
                        JSONArray jsonArray = new JSONArray(words);
                        String jsonString = new JSONObject()
                                .put("ili", ili)
                                .put("pwn31", splitted[2].split(":")[1])
                                .put("words", jsonArray).toString();
                        return jsonString;
                    } catch (JSONException e) {
                        e.printStackTrace();
                        logger.error("Service: " + e.getMessage());
                    }
                    return null;
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
            logger.error("Service: " + e.getMessage());
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                    logger.error("Service: " + e.getMessage());
                }
            }
        }
        return null;
    }

    /**
     * Private method for parsing ILI from specified file (this case == TTL 3.1 file)
     *
     * @param id ID we are looking for in file
     * @param is Input stream from file
     * @return String value of ILI
     * @throws IOException if something went wrong
     */
    private String getIliFrom31TtlFile(String id, InputStream is) throws IOException {
        BufferedReader br = null;

        String line;
        try {
            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null) {
                if (line.startsWith("@") || line.startsWith("#") || line.isEmpty()) {
                    continue;
                }
                String[] halfOfLine = line.split("#");

                String[] splitted = halfOfLine[0].split("\\s+");
                String[] fileId = splitted[2].split(":");
                if (fileId[1].equals(id)) {
                    try {
                        String[] words = halfOfLine[1].split(",\\s+");
                        String tmpString = words[0].substring(1, words[0].length());
                        words[0] = tmpString;
                        JSONArray jsonArray = new JSONArray(words);
                        String jsonString = new JSONObject()
                                .put("ili", splitted[0].split(":")[1])
                                .put("pwn31", splitted[2].split(":")[1])
                                .put("words", jsonArray).toString();
                        return jsonString;
                    } catch (JSONException e) {
                        e.printStackTrace();
                        logger.error("Service: " + e.getMessage());
                    }
                    return null;
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
            logger.error("Service: " + e.getMessage());
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                    logger.error("Service: " + e.getMessage());
                }
            }
        }
        return null;
    }

    /**
     * Private method for parsing ILI from specified file (this case == TAB ILI file)
     *
     * @param id ID we are looking for in file
     * @param is Input stream from file
     * @return String value of ILI
     * @throws IOException if something went wrong
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
            e.printStackTrace();
            logger.error("Service: " + e.getMessage());
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                    logger.error("Service: " + e.getMessage());
                }
            }
        }
        return null;
    }
}
